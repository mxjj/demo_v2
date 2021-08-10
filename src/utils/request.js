import axios from 'axios'
import {
    Loading,
    Message,
    // Notification,
    MessageBox
} from 'element-ui'

import store from '../store'
// import router from '../router/index'

import Cookies from 'js-cookie'

// console.log(router)

let requestNum = 0, // 累计请求数
    loadingInstance = null, // loading实例
    againGetToken = false // 重新获取token
    // isDialogshowed = false // 是否已经弹窗去登录

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 1000 * 60 * 30,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
})

service.interceptors.request.use(
    config => {
        requestNum++
        // 每次发送请求之前判断vuex中是否存在token
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        let token = Cookies.get('Auth-AdminToken')
        let refreshToken = Cookies.get('Auth-AdminRefreshToken')

        token && (config.headers['Auth-AdminToken'] = token)
        // console.log(config)
        refreshToken && (againGetToken || (config && config.data && config.data.isRefreshToken)) && (config.headers['Auth-AdminRefreshToken'] = refreshToken)
        if (config && config.data && config.data.isRefreshToken) {
            config.data = null
        }
        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    },
)

service.interceptors.response.use(
    async res => {
            requestNum--
            againGetToken = false

            if (requestNum == 0) {
                loadingInstance && loadingInstance.close()
                loadingInstance = null
            }

            let {
                success,
                msg,
                errcode,
                data,
            } = res.data

            if (success) {
                // 请求成功
                // isDialogshowed = false
                return data
            }
            return new Promise((resolve, reject) => {
                // const {
                //     params,
                //     url
                // } = res.config

                // 没有权限
                if (errcode == 'NotAccess') {
                    store.dispatch('permission/setIsNotAccess', true)
                    reject(res)
                } else {
                    // 本次请求添加 reqParams （请求参数中携带）参数：handleError 为 true，用户自己try catch，框架不做处理

                    let reqParams = null
                    try {
                        if (res.config && res.config.data) {
                            reqParams = JSON.parse(res.config.data)
                        }
                    } catch (error) {
                        console.log(error)
                    }

                    if (reqParams && reqParams.handleError) {
                        console.log('自行处理错误', res)
                        reject(res)
                    } else {
                        reject({
                            msg,
                            data,
                            errcode,
                        })

                        Message.error(msg)
                        console.error(msg)
                    }
                }
            })
        },
        error => {
            requestNum--
            if (requestNum == 0 || againGetToken) {
                loadingInstance && loadingInstance.close()
                loadingInstance = null
            }
            againGetToken = false
            let msg = (error && error.message) || '请求失败!'
            console.error(error, 'error', error.response, error.response && error.response.status)
            switch (error && error.response && error.response.status) {
                case 400:
                    msg = '请求错误,请联系管理员![400]}'
                    break
                case 404:
                    msg = '未找到访问地址,请联系管理员![404]'
                    break
                case 405:
                    msg = error.data.Message + 405
                    break
                case 408:
                    // msg = '请求超时,请稍后重试!'
                    msg = '网络请求超时,请检查是否操作成功![408]'
                    break
                case 500:
                    // msg = '请求失败,请联系管理员![500]'
                    msg = '网络请求失败,请检查是否操作成功![500]'
                    break
                case 502:
                    // msg = '网关错误,请联系管理员!'
                    msg = '网络请求失败,请检查是否操作成功![502]'
                    break
                case 503:
                    // msg = '服务不可用,请联系管理员!'
                    msg = '网络请求失败,请检查是否操作成功![503]'
                    break
                case 504:
                    // msg = '网关超时,请联系管理员!'
                    msg = '网络请求失败,请检查是否操作成功![504]'
                    break
                default:
                    // msg = '请求失败,请联系管理员![默认]'
                    msg = '网络请求失败,请检查是否操作成功!'
                    console.log('default：', error)
                    MessageBox.alert(msg + ',刷新中...', '提示', {
                        showClose: false,
                    }).then(() => {
                        window.location.reload()
                    })
                    return Promise.reject({
                        msg: msg || error,
                    })
                    
            }

            console.log("error == 'Error: Network Error'", error == 'Error: Network Error', msg, error) // for debug
            Message.error(msg || error)

            return Promise.reject({
                msg: msg || error,
            })
        },
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params, opt = {}) {
    opt = Object.assign({
            loading: true,
            loadingText: '加载中...',
        },
        opt,
    )
    if (opt.loading && !loadingInstance) {
        loadingInstance = Loading.service({
            lock: true,
            text: opt.loadingText,
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0)',
        })
    }
    return new Promise((resolve, reject) => {
        service
            .get(url, {
                params: params,
            })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params, opt = {}) {
    opt = Object.assign({
            loading: true,
            loadingText: '加载中...',
        },
        opt,
    )
    if (opt.loading && !loadingInstance) {
        loadingInstance = Loading.service({
            lock: true,
            text: opt.loadingText,
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0)',
        })
    }
    return new Promise((resolve, reject) => {
        service
            .post(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function put(url, params, opt = {}) {
    opt = Object.assign({
            loading: true,
            loadingText: '加载中...',
        },
        opt,
    )
    if (opt.loading && !loadingInstance) {
        loadingInstance = Loading.service({
            lock: true,
            text: opt.loadingText,
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0)',
        })
    }
    return new Promise((resolve, reject) => {
        service
            .put(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
/**
 * del方法，对应del请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function del(url, params, opt = {}) {
    opt = Object.assign({
            loading: true,
            loadingText: '加载中...',
        },
        opt,
    )
    if (opt.loading && !loadingInstance) {
        loadingInstance = Loading.service({
            lock: true,
            text: opt.loadingText,
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0)',
        })
    }
    return new Promise((resolve, reject) => {
        service
            .delete(url, {
                data: params,
            })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
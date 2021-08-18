import {
    post
} from '@/utils/request'

const prefix = '/mock/941'

export default {
    login(data) {
        // 登录
        return post(`${prefix}/login`, data)
    },
}
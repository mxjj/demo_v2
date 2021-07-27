import cssVars from 'css-vars-ponyfill'


let color = ''

try {
    // 方便下次进来直接更换用户之前设定的初始的主题颜色
    color = window.localStorage.getItem('globalColor') || 'blue'
} catch (error) {
    console.log(error, '====主题颜色获取异常')
}

// 先给一个自定义的初始化颜色
const state = {
    color: color
}

const mutations = {
    // 修改主题颜色
    SET_THEMR_COLOR(state, value) {
        cssVars({
            preserveStatic: false,
            variables: ({
                '--baseColor': value
            })
        })
        state.color = value
        window.localStorage.setItem('globalColor',value)
    }
}

const actions = {
    // 异步设置主题颜色
    ASYNC_SET_THEMR_COLOR({
        commit
    }, data) {
        commit('SET_THEMR_COLOR', data)
    }
}

export {
    state,
    mutations,
    actions
}
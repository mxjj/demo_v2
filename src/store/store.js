import cssVars from 'css-vars-ponyfill'


let color,
    headerColor,
    tabarColor = ''

try {
    // 方便下次进来直接更换用户之前设定的初始的主题颜色
    color = window.localStorage.getItem('globalColor') || 'blue'
    headerColor = window.localStorage.getItem('globalheaderColor') || 'blue'
    tabarColor = window.localStorage.getItem('globaltabbarColor') || 'blue'
} catch (error) {
    console.log(error, '====主题颜色获取异常')
}

// 先给一个自定义的初始化颜色
const state = {
    color: color,
    headerColor: headerColor,
    tabarColor: tabarColor,
    activeComponent: 'home'
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
        window.localStorage.setItem('globalColor', value)
    },
    // 修改header主题颜色
    SET_Herder_THEMR_COLOR(state, value) {
        cssVars({
            preserveStatic: false,
            variables: ({
                '--jabbar_nav_header_color': value
            })
        })
        state.headerColor = value
        window.localStorage.setItem('globalheaderColor', value)
    },
      // 修改侧边主题颜色
      SET_Tabbar_THEMR_COLOR(state, value) {
        cssVars({
            preserveStatic: false,
            variables: ({
                '--jabbar_nav_Tabbar_color': value
            })
        })
        state.tabarColor = value
        window.localStorage.setItem('globaltabbarColor', value)
    },
    //设置 当前选中
    SET_ACTIVE_TABS(state, value) {
        state.activeComponent = value
    }
}

const actions = {
    // 异步设置主题颜色
    ASYNC_SET_THEMR_COLOR({
        commit
    }, data) {
        commit('SET_THEMR_COLOR', data)
    },
    // 设置当前选中
    ACTIVE_SET_HEADER({
        commit
    }, data) {
        commit('SET_ACTIVE_TABS', data)
    }
}

export {
    state,
    mutations,
    actions
}
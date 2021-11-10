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
(() => {
    // 修改主题颜色函数
    cssVars({
        preserveStatic: false,
        variables: ({
            '--baseColor': color,
            '--jabbar_nav_header_color': headerColor,
            '--jabbar_nav_Tabbar_color': tabarColor
        })
    })
})()
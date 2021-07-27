import cssVars from 'css-vars-ponyfill'

(() => {
    // 读取 index.html 后端记性植入的主题颜色 直接修改 定制的颜色变量
    let themeColor = 'yellow';
    // 修改主题颜色函数
    cssVars({
        preserveStatic: false,
        variables: ({
            '--baseColor': themeColor
        })
    })
})()
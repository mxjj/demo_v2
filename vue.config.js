module.exports = {
    publicPath: "/",
    outputDir: "cliBuild",
    assetsDir: "cliBuild/HappyBirthday", // 放置静态资源的路径
    indexPath: "HappyBirthday.html",
    lintOnSave:process.env.NODE_ENV !== 'production', // 只在 开发环境使用
    productionSourceMap:false,// 生产环境的 source map false加速生产环境构建
    devServer: {
        open: true
    }
}
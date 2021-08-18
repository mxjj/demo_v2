console.log(process.env.NODE_ENV, '=======')

module.exports = {
    publicPath: "/",
    outputDir: "dist",
    assetsDir: "dist/HappyBirthday", // 放置静态资源的路径
    indexPath: "index.html",
    lintOnSave: process.env.NODE_ENV !== 'production', // 只在 开发环境使用
    productionSourceMap: false, // 生产环境的 source map false加速生产环境构建
    devServer: {
        open: true,
        overlay: {
            warnings: false,
            errors: true,
        },
        proxy: {
            '/mock': {
                target: 'https://yapi.142vip.cn/',
                changeOrigin: true,
                secure: true,
                pathRewrite: {
                    '^/mock': '/mock',
                }
            },
        }
    },
    chainWebpack: config => {
        // 压缩文件体积变小
        config.optimization.minimize(true);
    },
    css: {
        loaderOptions: {
            sass: {
                // 样式的引入路径
                prependData: `@import "@/style/globalColor.scss";`,
            },
        }
    }
}
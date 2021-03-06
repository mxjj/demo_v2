/**
 * 
 *  工具类 函数
 * 
 */

const FunctionSets = {
    // 十六进制颜色值的正则表达式
    colorRgba: (sHex, alpha = 1) => {
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
        /* 16进制颜色转为RGB格式 */
        let sColor = sHex.toLowerCase()
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
                var sColorNew = '#'
                for (let i = 1; i < 4; i += 1) {
                    sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
                }
                sColor = sColorNew
            }
            //  处理六位的颜色值
            var sColorChange = []
            for (let i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
            }
            // return sColorChange.join(',')
            // 或
            return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')'
        } else {
            return sColor
        }
    },
    /**
     * 处理async的捕获异常
     * @param {function} promise  方法
     */
    catchAsyncFn: promise => {
        return promise.then(res => [null, res]).catch(err => [err, null])
    },
}

export default {
    ...FunctionSets
}
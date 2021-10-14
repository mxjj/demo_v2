import wx from 'weixin-js-sdk'
let SEP_WechatConfig = {
    debug: false,
    appId: 'wx181524113a0fa2dd',
    timestamp: '1634179477',
    nonceStr: "BCBE3365E6AC95EA2C0343A2395834DD",
    signature: "76d5c1c7779bc9f3235013dd0450aeced1cfd5e2",
    jsApiList: ["checkJsApi", "hideAllNonBaseMenuItem", "scanQRCode", "hideMenuItems", "chooseImage", "getLocalImgData", "uploadImage", "getLocation", "chooseWXPay", "updateAppMessageShareData", "updateTimelineShareData", "openLocation"]
}
export function App_wxInit(config = SEP_WechatConfig) {
    if (!config) {
        console.log('没有微信配置信息')
        return
    } else {
        if (!App_CurSetting.IsWxChat()) {
            console.log('不是微信')
            return
        }
    }
    wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: config.appId, // 必填，公众号的唯一标识
        timestamp: config.timestamp, // 必填，生成签名的时间戳
        nonceStr: config.timestamp, // 必填，生成签名的随机串
        signature: config.signature, // 必填，签名
        jsApiList: config.jsApiList || [] // 必填，需要使用的JS接口列表
    });
    //验证
    wx.ready(function (res) {
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        console.log('微信初始化成功===', res)
    });
    wx.error((error) => {
        console.log(error, '微信初始化失败')
    })
}

export const App_CurSetting = {
    IsWxChat: () => () => navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger',
    // 是否安卓
    isAndroid: () => navigator.userAgent.toLowerCase().indexOf('android') !== -1,
    // 是否iphone
    isIphone: () => navigator.userAgent.toLowerCase().indexOf('iphone') !== -1,
    // 是否ipad
    isIpad: () => navigator.userAgent.toLowerCase().indexOf('ipad') !== -1,
    // 是小程序
    isMiniProgram: () => navigator.userAgent.toLowerCase().match(/miniProgram/i) == 'miniprogram',
}
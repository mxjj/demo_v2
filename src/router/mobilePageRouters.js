/**
 *  页面路由配置
 */
const mobilePagelist = [{
    path: "/home",
    name: 'home',
    meta: {
        title: '首页',
    },
    component: () => import('@/pages/index')
}]


export default mobilePagelist
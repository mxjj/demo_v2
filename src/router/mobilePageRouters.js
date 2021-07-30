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
}, {
    path: "/two",
    name: 'two',
    meta: {
        title: '首页2',
    },
    component: () => import('@/pages/two')
}]


export default mobilePagelist
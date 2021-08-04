/**
 *  页面路由配置
 */
const test = [{
    path: "/test",
    name: 'test',
    meta: {
        title: '测试',
    },
    component: () => import('@/pages/test/index')
}, ]


export default test
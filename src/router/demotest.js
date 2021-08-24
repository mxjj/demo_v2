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
}, {
    path: "/upload",
    name: 'upload',
    meta: {
        title: '上传',
    },
    component: () => import('@/pages/upload')
}, ]


export default test
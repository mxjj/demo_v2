/**
 *  页面路由配置
 */
import layout from '@/layout'
const test = [{
    path: "/test",
    name: 'test',
    component:layout,
    meta: {
        title: '测试',
    },
    children: [{
        path: "/test",
        name: 'test',
        meta: {
            title: '测试',
        },
        component: () => import('@/pages/test/index')
    }]
}, {
    path: "/upload",
    name: 'upload',
    meta: {
        title: '上传',
    },
    component: () => import('@/pages/upload')
}, ]


export default test
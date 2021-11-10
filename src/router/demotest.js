/**
 *  页面路由配置
 */
import layout from '@/layout'
const test = [{
    path: "/test",
    name: 'home',
    component:layout,
    meta: {
        title: '测试',
    },
    children: [{
        path: "/test",
        name: 'home',
        meta: {
            title: '测试',
        },
        component: () => import('@/pages/mobile/test/index')
    }]
}, {
    path: "/upload",
    name: 'upload',
    meta: {
        title: '上传',
    },
    component: () => import('@/pages/mobile/upload')
},{
    path: "/body",
    name: 'body',
    meta: {
        title: '猪页',
    },
    component: () => import('@/pages/mobile/upload')
} ]


export default test
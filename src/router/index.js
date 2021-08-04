import Vue from 'vue'
import Router from 'vue-router'
import mobilePageRouters from './mobilePageRouters'
import demotest from './demotest'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: "/",
        redirect: '/test',
    }, ...mobilePageRouters, ...demotest]
})


export default router
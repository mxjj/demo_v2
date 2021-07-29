import Vue from 'vue'
import Router from 'vue-router'
import mobilePageRouters from './mobilePageRouters'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: mobilePageRouters
})


export default router
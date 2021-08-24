import Vue from 'vue'
import App from './App.vue'
import './style/base.scss'
import store from './store/index.js'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import header from './components/header'
import api from './api/index'
import * as qiniu from 'qiniu-js'
Vue.use(ElementUI)

Vue.component('websiteHeader', header)

import './utils/initialization.js'

Vue.prototype.$api = api
Vue.prototype.$qiniu = qiniu
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
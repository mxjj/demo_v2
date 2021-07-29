import Vue from 'vue'
import App from './App.vue'
import './style/base.scss'
import store from './store/index.js'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)



import './utils/initialization.js'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
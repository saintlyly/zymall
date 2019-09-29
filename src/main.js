import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入全局配置
import './config/globalConfig.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

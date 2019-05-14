import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import './registerServiceWorker'
require('@/config/rem')
import * as filters from './filters'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

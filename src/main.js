import Vue from 'vue'
import App from './App.vue'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'

// Vue.use(MintUI)

import router from "./router/router.js"
// 引入Vuex的store对象
import store from './store'

import axios from "axios"
axios.defaults.baseURL = 'https://elm.cangdu.org/'
Vue.prototype.$http = axios



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
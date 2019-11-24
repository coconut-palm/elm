import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

import router from "./router/router.js"



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
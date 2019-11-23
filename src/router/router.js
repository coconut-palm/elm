import vue from "vue"
import vueRouter from "vue-router"

vue.use(vueRouter)

import home from "../components/home.vue"
import order from "../components/order.vue"
import search from "../components/search.vue"
import user from "../components/user.vue"

const router = new vueRouter({
  routes: [
    { path: '/home', component: home },
    { path: '/order', component: order },
    { path: '/search', component: search },
    { path: '/user', component: user },
  ]
})

export default router
import vue from "vue"
import vueRouter from "vue-router"

vue.use(vueRouter)

import home from "../pages/home/home"
import order from "../pages/order/order"
import search from "../pages/search/search"
import user from "../pages/user/user"

const router = new vueRouter({
  routes: [
    { path: '/home', component: home },
    { path: '/order', component: order },
    { path: '/search', component: search },
    { path: '/user', component: user },
  ]
})

export default router
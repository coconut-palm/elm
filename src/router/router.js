import vue from "vue"
import vueRouter from "vue-router"

vue.use(vueRouter)

import home from "../pages/home/home"
import order from "../pages/order/order"
import search from "../pages/search/search"
import user from "../pages/user/user"
import login from "../pages/login/login"

const router = new vueRouter({
  routes: [
    { path: '/', component: home },
    { path: '/home', component: home },
    { path: '/order', component: order },
    { path: '/search', component: search },
    { path: '/user', component: user },
    { path: '/login', component: login },
  ]
})

export default router
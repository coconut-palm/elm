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
    { path: '/home', component: home,
    meta: {
      showFooter: true
    } 
  },
    { path: '/order', component: order,
    meta: {
      showFooter: true
    } 
  },
    { path: '/search', component: search,
    meta: {
      showFooter: true
    }
  },
    { path: '/user', component: user,
    meta: {
      showFooter: true
    } 
  },
    { path: '/login', component: login },
  ]
})

export default router
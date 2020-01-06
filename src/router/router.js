import vue from "vue"
import vueRouter from "vue-router"

vue.use(vueRouter)

import home from "../pages/home/home"
import order from "../pages/order/order"
import search from "../pages/search/search"
import user from "../pages/user/user"
import login from "../pages/login/login"
import Shop from "../pages/shop/Shop"
import ShopGoods from "../pages/shop/ShopGoods/ShopGoods"
import ShopInfo from "../pages/shop/ShopInfo/ShopInfo"
import ShopRatings from "../pages/shop/ShopRatings/ShopRatings"

const router = new vueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: home,
    meta: {
      showFooter: true
    } 
   },
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
    { path: '/shop', component: Shop,
  children: [
    {path: '/shop/goods', component: ShopGoods},
    {path: '/shop/info', component: ShopInfo},
    {path: '/shop/ratings', component: ShopRatings},
    {path: '', redirect: '/shop/goods'}
  ]
  },
  ]
})

export default router
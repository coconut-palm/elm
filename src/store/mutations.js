/*
vuex 的 mutations 模块
*/
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_SHOP,
  RECEIVE_CAPTCHAS,
  RECEIVE_USER_INFO,
  RECEIVE_FOODMENU
} from './mutation-types'

// [方法名](state,{param}){}
export default {
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, { categorys }) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, { shops }) {
    state.shops = shops
  },
  [RECEIVE_SHOP](state, { shop }) {
    state.shop = shop
  },
  [RECEIVE_CAPTCHAS](state, {captchas}) {
    state.captchas = captchas
  },
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RECEIVE_FOODMENU] (state, {menuList}) {
    state.menuList = menuList
  },
}
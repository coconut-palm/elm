/*
vuex 的 mutations 模块
*/
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_CAPTCHAS,
  RECEIVE_USER_INFO,
  // RECEIVE_SHOP_ID,
  RESET_USER_INFO,
  // RECEIVE_SHOP_DETAIL_DATA
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
  [RECEIVE_CAPTCHAS](state, {captchas}) {
    state.captchas = captchas
  },
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  // [RECEIVE_SHOP_ID] (state, {shopId}) {
  //   state.shopId = shopId
  // },
  // [RECEIVE_SHOP_DETAIL_DATA] (state, {shopDetailData}) {
  //   state.shopDetailData = shopDetailData
  // },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
}
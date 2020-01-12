/*
Action:通过操作mutation间接更新state的多个方法的对象
 */
// 注意要引入api接口函数
import {
  reqAddress,
  reqCategorys,
  reqShops,
  getcaptchas,
  reqUserInfo,
  reqLogout,
  // shopDetails
} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_CAPTCHAS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  // RECEIVE_SHOP_DETAIL_DATA
} from './mutation-types'

export default {
  // 异步获取地址
  async getAddress({ commit, state }) {
    // 从state状态中获取到经纬度用来设置reqAddress的参数（看接口文档）
    const geohash = state.latitude + ',' + state.longitude
    // 1. 发送异步ajax请求
    const result = await reqAddress(geohash)
    // 2. 提交一个mutation
    const address = result
    commit(RECEIVE_ADDRESS, { address })

  },
  // 异步获取食品分类列表
  async getCategorys({ commit }) {
    // 发送异步ajax请求
    const result = await reqCategorys()
    // 提交一个mutation
    const categorys = result
    commit(RECEIVE_CATEGORYS, { categorys })
  },
  // 异步获取商家列表
  async getShops({ commit, state }) {
    // 对象的结构赋值
    const { longitude, latitude } = state
    // 发送异步ajax请求
    const result = await reqShops(longitude, latitude)
    // 提交一个mutation
    const shops = result
    // console.log(shops)
    commit(RECEIVE_SHOPS, { shops })
  },

  // async getShopDetailData({commit, state}) {
  //   const {shopId} = state
  //   const shopDetailData = await shopDetails(shopId)
  //   commit(RECEIVE_SHOP_DETAIL_DATA, {shopDetailData})
  // },

  // 异步获取图片验证码
  async getCaptchaCode( {commit} ){
    const captchas = await getcaptchas();
    commit(RECEIVE_CAPTCHAS, { captchas })
  },

  // 同步记录用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  // saveShopId ({commit}, shopId) {
  //   commit(RECEIVE_SHOP_ID, {shopId})
  // },

  // 异步获取用户信息
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    const userInfo = result
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  // 异步登出
  async logout ({commit}) {
    const result = await reqLogout()
    if (result.status === 1) { commit(RESET_USER_INFO) }
  },
}

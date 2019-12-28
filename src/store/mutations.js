/*
vuex 的 mutations 模块
*/
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS
} from './mutation-types'

// [方法名](state,{param}){}
export default {
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, { categorys }) {
    state.categorys = categorys
  }
}
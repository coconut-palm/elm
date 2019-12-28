/*
与后台交互模块 （依赖已封装的ajax函数）
 */
import ajax from './ajax'

const BASE_URL = 'https://elm.cangdu.org'

/**
 * 获取地址信息(根据经纬度串)
 * 这个接口的经纬度参数是在url路径里的，没有query参数
 */
export const reqAddress = geohash => ajax(`${BASE_URL}/v2/pois/${geohash}`)

/**
 * 获取 home 页面食品分类列表
 */
export const reqCategorys = () => ajax(BASE_URL + '/v2/index_entry')
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

/**
 * 获取 msite 商铺列表(根据query参数：经纬度)
 * 将经纬度两个数据作为一个参数对象传入
 * 也可以两个数据分别传入ajax， 然后再放入一个对象参数内， 如下面的手机号接口
 */
export const reqShops = ({ latitude, longitude }) => ajax(BASE_URL + '/shopping/restaurants', { latitude, longitude })

// 获取图片验证码
export const getcaptchas = () => ajax(BASE_URL + '/v1/captchas', {},'POST');

/**
 * 根据经纬度和关键字搜索商铺列表
 */
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL + '/v4/restaurants', {geohash, keyword})

/**
 * 账号密码登录
 */
export const reqPwdLogin = ({username, password, captcha_code}) => ajax(BASE_URL + '/v2/login', {username, password, captcha_code}, 'POST')

/**
 * 获取短信验证码
 */
export const reqSendCode = phone => ajax(BASE_URL + '/v4/mobile/verify_code/send', {
  mobile: phone,
	scene: 'login',
  type: 'sms'
}, 'POST')

/**
 * 手机号验证码登录
 */
export const reqSmsLogin = (mobile, code, validate_token) => ajax(BASE_URL + '/v1/login/app_mobile', {mobile, code, validate_token}, 'POST')

/**
 * 获取用户信息(根据会话)
 */
export const reqUserInfo = () => ajax(BASE_URL + '/v1/user')

/**
 * 请求登出
 */
export const reqLogout = () => ajax(BASE_URL + '/v2/signout')


<template>
  <section class="loginContainer">
    <div class="loginInner">
      <!-- 头部标题 -->
      <div class="login_header">
        <h2 class="login_logo">Mint外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" @click="loginWay = true" :class="{on: loginWay}">短信登录</a>
          <a href="javascript:;" @click="loginWay = false" :class="{on: !loginWay}">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <!-- 短信登录 -->
          <div :class="{on: loginWay}">
            <!-- 手机号 -->
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button class="get_verification" 
              :disabled="!rightPhone" :class="{right_phone:rightPhone}" @click.prevent="getCode">{{computeTime>0 ? `(${computeTime})已发送` : '获取验证码'}}</button>
            </section>
            <!-- 验证码 -->
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <!-- 用户提示 -->
            <section class="login_hint">
              温馨提示：未注册Mint外卖帐号的手机号，登录时将自动注册，且代表已同意<a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <!-- 手机登录 -->
          <div :class="{on: !loginWay}">
            <section>
              <!-- 手机号 -->
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="username">
              </section>
              <!-- 密码 -->
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="password">
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="password">
                <!-- 密码图标 -->
                <div class="switch_button off" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
                </div>
              </section>
              <!-- 验证码 -->
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha_code">
                <img class="get_verification" :src="captchaCodeImg" alt="captcha" @click="getCaptchaCode">
              </section>
            </section>
          </div>
          <!-- 登录 -->
          <button class="login_submit">
            登录
          </button>
        </form>
        <!-- 关于我们 -->
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <!-- 返回上一级 -->
      <a href="javascript:;" class="go_back" @click="$router.back()">
        <i class="iconfont icon-right"></i>
      </a>
    </div>
    <!-- 弹窗提示 -->
  <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"></AlertTip>
  </section>
</template>

<script>
// 弹窗
import AlertTip from '../../components/AlertTip/AlertTip'

// import {mapState} from 'vuex'
import {getcaptchas} from '../../api/index'
import {reqSendCode, reqSmsLogin, reqPwdLogin} from '../../api'

export default {
  data() {
    return {
      loginWay: false, // true代表短信登陆, false代表密码
      phone: '', //手机号
      computeTime: 0,
      showPwd: false, //是否显示密码
      password: '',
      username: '', // 用户名
      code: '', // 短信验证码
      captcha_code: '', // 图形验证码
      alertText: '', // 提示文本
      alertShow: false, // 是否显示警告框
      captchaCodeImg: null
    }
  },
  components: {
    AlertTip
  },
  computed: {
    rightPhone () {
      // 利用正则对手机号进行匹配，返回布尔值
      return /^1\d{10}$/.test(this.phone)
    },
    // ...mapState(["captchas"]),  
    // getcaptchas() {
    //   return this.$store.state.captchas.code
    // }  
  },
  mounted() {
    this.getCaptchaCode()
    // this.$store.dispatch("getCaptchaCode")
  },
  methods: {
    // 异步获取短信验证码
    async getCode () {
      // 如果当前没有计时
      if (!this.computeTime) {
        // 启动倒计时
        this.computeTime = 30
        this.intervalId = setInterval(() => {
          this.computeTime--
          if (this.computeTime <= 0) {
            // 停止计时
            clearInterval(this.intervalId)
          }
        }, 1000)
      }
      // 发送ajax请求（向指定手机号发送验证码短信）
    },
    // 异步登录
    async login () {
      let result
      // 前台表单验证
      if (this.loginWay) { // 短信登陆
        const {phone, code} = this
        if (!this.rightPhone) {
          // 手机号不正确
          this.showAlert('手机号不正确')
          return
        } else if (!/^\d{6}$/.test(code)) {
          // 验证必须是6位数字
          this.showAlert('验证必须是6位数字')
          return
        }
        // 发送ajax请求短信登陆
        result = await reqSmsLogin(phone, code)
      } else { // 密码登陆
        const {username, password, captcha_code} = this
        if (!this.username) {
          // 用户名必须指定
          this.showAlert('用户名必须指定')
          return
        } else if (!this.password) {
          // 密码必须指定
          this.showAlert('密码必须指定')
          return
        } else if (!this.captcha_code) {
          // 验证码必须指定
          this.showAlert('验证码必须指定')
          return
        }
        // 发送ajax请求密码登陆
        result = await reqPwdLogin({username, password, captcha_code})
        console.log(result)
      }

      // 停止计时
      if (this.computeTime) {
        this.computeTime = 0
        clearInterval(this.intervalId)
        this.intervalId = undefined
      }

      // 根据结果数据处理
      if (result) {
        const user = result
        // 将user保存到vuex的state
        this.$store.dispatch('recordUser', user)
        // 去个人中心界面
        this.$router.replace('/user')
      } else {
        // 显示新的图片验证码
        this.getCaptchaCode()
        // 显示警告提示
        const message = result.message
        this.showAlert(message)
      }
    },
    showAlert (alertText) {
      this.alertShow = true
      this.alertText = alertText
    },
    // 关闭警告框
    closeTip () {
      this.alertShow = false
      this.alertText = ''
    },
    async getCaptchaCode(){
      const res = await getcaptchas();
      this.captchaCodeImg = res.code;
    },  
    
    
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone
                  color black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(30px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>

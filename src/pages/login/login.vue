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
        <form>
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
              <input type="tel" maxlength="8" placeholder="验证码">
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
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名">
              </section>
              <!-- 密码 -->
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
                <!-- 密码图标 -->
                <div class="switch_button off" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
                </div>
              </section>
              <!-- 验证码 -->
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码">
                <img class="get_verification" src="" alt="captcha">
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
      <a href="javascript:;" class="go_back">
        <i class="iconfont"></i>
      </a>
    </div>
    <!-- 信息提示 -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      loginWay: false, // true代表短信登陆, false代表密码
      phone: '', //手机号
      computeTime: 0,
      showPwd: false, //是否显示密码
      pwd: ''
    }
  },
  computed: {
    rightPhone () {
      // 利用正则对手机号进行匹配，返回布尔值
      return /^1\d{10}$/.test(this.phone)
    }
  },
  methods: {
    // 异步获取短信验证码
    getCode () {
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
    }
  },
}
</script>

<style lang="scss" scoped>
.loginContainer {
  .loginInner {
    .login_header {
      width: 100%;
      height: 140px;
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .login_logo {
        flex: 1;
        margin-top: 30px;
        box-sizing: border-box;
        font-size: 40px;
      }
      .login_header_title {
        flex: 1; 
        box-sizing: border-box;  
        margin-top: 40px; 
        font-size: 14px; 
        >:nth-child(1) {
          padding-right: 25px;
        }
        >:nth-child(2) {
          padding-left: 25px;
        }
      }
    }
    .login_content {
      >form {
        >div {
          display: none;
          &.on {
            display: block;
          }
          .login_message {
            position: relative;
            .get_verification {
              position: absolute;
              right: 50px;
              top: 50%;
              transform: translateY(-50%);
              font-size: 14px;
              border: 0;
              color: #ccc;
              background: transparent;
              &.right_phone {
                color: black;
              }
            }
          }
          .login_verification {
            position: relative;
            .switch_button {
              position: absolute;
              width: 30px;
              height: 16px;
              line-height: 16px;
              color: #fff;
              top: 50%;
              right: 50px;
              transform: translateY(-50%);
              font-size: 12px;
              border: 1px solid #ddd;
              border-radius: 8px;
              transition: background-color 0.3s;
              border-color: 0.3s;
              padding: 0 6px;
              &.off {
                background: #fff;
                .switch_text {
                  float: right;
                  color: #ddd;
                }
              }
              &.on {
                background: #02a774;
              }           
              >.switch_circle {
                position: absolute;
                top: -1px;
                left: -1px;
                width: 16px;
                height: 16px;
                border: 1px solid #ddd;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
                transition: transform 0.3s;
                &.right {
                  transform: translateX(30px);
                }
              }  
            }
          }
          .login_hint {
            width: 80%;
            margin-left: 40px;
            font-size: 16px;
          }
          input {
            width: 80%;
            height: 48px;
            border-radius: 4px;
            margin-top: 10px;
            margin-bottom: 10px;
            box-sizing: border-box;
            outline: 0;            
            margin-left: 40px;
            margin-right: 40px;
            border: 1px solid #ccc;
          }
        }
        .login_submit {
          width: 80%;
          height: 42px;
          margin-left: 40px;
          margin-top: 30px;
          border-radius: 4px;
          background-color: #4cd96f;
          color: #fff;
          font-size: 16px;
          border: 0;
        }
      }
      .about_us {
        display: block;
        font-size: 12px;
        text-align: center;
        margin-top: 20px;
        color: #999;
      }
    }
  }
}

</style>
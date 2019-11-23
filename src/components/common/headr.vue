<template>
  <div class="head">
    <span class="search"><a>搜索</a></span>
    <span class="address"><a>地址</a></span>
    <span class="login"><a>登录</a></span>
    <span class="register"><a>注册</a></span> 
  </div>
</template>

<script>
export default {
  name:"headr"
}
</script>

<style scoped>
  .head {
  width: 100%;
  height: 44px;
  background-color: #3190E8;
  display: flex;
  line-height: 44px;
}

.head a {
  color: #fff;
}

.search {
  flex: 1.5;
}
.address {
  flex: 5.5;
  text-align: center;
}
.login {
  flex: 1.5;
}
.register {
  flex: 1.5;
}

</style>
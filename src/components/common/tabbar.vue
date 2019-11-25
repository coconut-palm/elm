<template>
  <div class="tabbar-style">
    <div class="tabbar-item">
      <router-link to="/home">外卖</router-link>
    </div>
    <div class="tabbar-item">
      <router-link to="/search">搜索</router-link>
    </div>
    <div class="tabbar-item">
      <router-link to="/order">订单</router-link>
    </div>
    <div class="tabbar-item">
      <router-link to="/user">我的</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:"tabbar"
}
</script>

<style scoped>
  .tabbar-style {
    width: 100%;
    height: 44px;
    border-top: 1px solid #ccc;
    bottom: 0px;
    display: flex;
    position: fixed;
    background-color: #fff;
  }

  .tabbar-item{
    flex: 1;
    text-align: center;
    line-height: 44px;
  }
</style>
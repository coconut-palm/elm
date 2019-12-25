<template>
  <div class="tabbar_style">
    <router-link class="tabbar_item" to="/home">
      <i class="iconfont icon-deliver"></i>
      <span>外卖</span>
    </router-link>

    <router-link class="tabbar_item" to="/search">
      <i class="iconfont icon-search"></i>
      <span>搜索</span>
    </router-link>

    <router-link class="tabbar_item" to="/order">
      <i class="iconfont icon-calendar"></i>
      <span>订单</span>
    </router-link>

    <router-link class="tabbar_item" to="/user">
      <i class="iconfont icon-profile"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "tabbar"
};
</script>

<style>
.tabbar_style {
  position: fixed;
  z-index: 10;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid #e4e4e4;
}
.tabbar_item {
  display: flex;
  flex: 1;
  text-align: center;
  flex-direction: column;
  align-items: center;
  color: #999999;
}
.tabbar_item i {
  margin-top: 7px;
}
.tabbar_item span {
  font-size: 12px;
}
.iconfont {
  font-size: 22px;
}
.router-link-active {
  color: #02a774;
}
</style>


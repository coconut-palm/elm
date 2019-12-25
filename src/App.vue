<template>
  <div id="app">
    <router-view></router-view>

    <tabbar></tabbar>
  </div>
</template>

<script>
import headerTop from "./components/headerTop/headerTop";
import tabbar from "./components/tabbar/tabbar.vue";

import shoplist from "./components/shopList/shopList.vue";

export default {
  name: "app",
  components: {
    tabbar
  }
};
</script>

<style scoped>
@import "./assets/css/base.css";
</style>

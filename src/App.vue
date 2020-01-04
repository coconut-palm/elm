<template>
  <div id="app">
    <router-view></router-view>

    <!-- 非路由组件 -->
    <tabbar v-show="$route.meta.showFooter"></tabbar>
  </div>
</template>

<script>
import headerTop from "./components/headerTop/headerTop";
import tabbar from "./components/tabbar/tabbar.vue";

import shoplist from "./components/shopList/shopList.vue";

import { mapActions } from "vuex";

export default {
  name: "app",
  components: {
    tabbar
  },
  async mounted() {
    this.$store.dispatch("getAddress");
  }
};
</script>

<style scoped>
@import "./assets/css/base.css";
</style>

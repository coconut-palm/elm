<template>
  <div id="app">
    <headr></headr>

    <router-view></router-view>

    <tabbar></tabbar>
  </div>
</template>

<script>
import headr from './components/common/headr.vue'
import tabbar from './components/common/tabbar.vue'

import shoplist from './components/common/shopList.vue'


export default {
  name: 'app',
  components: {
    headr,
    tabbar,
    shoplist
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>

<template>
  <div class="shop_main">
    <ShopHeader></ShopHeader>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods">点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/ratings">评价</router-link>
      </div>
      <!-- <div class="tab-item">
        <router-link to="/shop/info">商家</router-link>
      </div> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader'

export default {
  components: {
    ShopHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shop_main
  overflow hidden
  .tab 
    display flex
    margin 116px 0 4px 0
    .tab-item
      display flex
      justify-content center
      flex 1
      font-size 18px
      .router-link-active 
        border-bottom 2px solid #02a774

</style>
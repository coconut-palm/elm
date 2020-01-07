<template>
  <div>
    <section class="shop_container">
      <!-- 返回首页 -->
      <nav class="goback"></nav>
      <!-- 头部 -->
      <header class="shop_detail_header">
        <!-- 头部背景图片 -->
        <div class="header_cover_img_con">
          <img src="" class="header_cover_img">
        </div>
        <!-- 头部信息 -->
        <section class="description_header">
          <!-- 导航至商家详情 -->
          <router-link to="" class="description_top">
            <!-- 头部左边商家图片 -->
            <section class="description_left">
              <img src="" >
            </section>
            <!-- 头部右边商家描述 -->
            <section class="description_right">
              <h4 class="description_title">数媒毕设</h4>
              <p class="description_text">商家配送 分钟送达 配送费</p>
              <p class="description_promotion">公告</p>
            </section>
            <span class="description_arrow">
              <i class="iconfont icon-right"></i>
            </span>
          </router-link>
          <!-- 头部底部活动描述 -->
          <footer class="description_footer">
            <p>
              <span class="tip_icon"></span>
              <span>（APP专享）</span>
            </p>
            <p>个活动</p>
            <span class="footer_arrow">
              <i class="iconfont icon-right"></i>
            </span>
          </footer>
        </section>
      </header>

    </section>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins';

.shop_container
  // position absolute
  right 0
  left 0
  height 100%
  overflow hidden
  .shop_detail_header 
    position relative 
    .header_cover_img_con
      position absolute
      width 100%
      height 100%
      z-index -1
      .header_cover_img
        background-color pink
        width 100%
        // position absolute
    .description_header
      background-color rgba(119,103,137,.43)
      padding 6px 0 6px 6px
      z-index 10
      .description_top
        display flex
        .description_left
          flex 1
          background-color red
        .description_right
          flex 4
          margin-left 4px
          .description_title
            font-weight 400
            margin-bottom 4px
          .description_text
            font-size 14px
            margin-bottom 4px
          .description_promotion
            font-size 14px
        .description_arrow
          position absolute
          right 6px
          top 30px
          color #fff
          >.icon-right
            color #fff        
      .description_footer
        margin-top 8px
        display flex
        justify-content space-between
        >p
          display inline-block
          font-size 14px
          .tip_icon
            color #fff
        &:nth-child(2)
          margin-right 30px
        .footer_arrow
          position absolute
          right 6px
          color #fff
          display inline-block

</style>
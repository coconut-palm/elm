<template>
  <div>
    <section class="food_container">
      <section class="menu_container">
        <!-- 食物左侧导航栏 -->
        <section class="menu_left">
          <ul>
            <li class="menu_left_li">
              <img src="" alt="">
              <span>{{}}</span>
              <span class="category_num"></span>
            </li>
          </ul>
        </section>
        <!-- 食物右侧导航栏 -->
        <section class="menu_right">
          <ul>
            <li>
              <!-- 右侧头部 -->
              <header class="menu_detail_header">
                <!-- 头部左侧 -->
                <section class="menu_detail_header_left">
                  <span class="menu_item_title">{{}}</span>
                  <span class="menu_item_description">{{}}</span>
                </section>
                <!-- 头部右侧 -->
                <span class="menu_detail_header_right">...</span>
                <!-- 点击显示文字 -->
                <p class="description_tip">
                  <span></span>
                </p>
              </header>
              <!-- 食物列表 -->
              <section class="menu_detail_list" >
                  <router-link to="" class="menu_detail_link">
                    <!-- 食物图片 -->
                    <section class="menu_food_img">
                      <img src="">
                    </section>
                    <!-- 食物描述 -->
                    <section class="menu_food_description">
                      <h3 class="food_description_head">
                        <!-- 食物名字 -->
                        <span class="description_foodname">{{}}</span>
                        <!-- 食物属性 -->
                        <ul class="attributes_ul">
                          <li>
                            <p></p>
                          </li>
                        </ul>
                      </h3>
                      <!-- 食物描述文本 -->
                      <p class="food_description_content">{{}}</p>
                      <!-- 食物评价 -->
                      <p class="food_description_sale_rating">
                        <span>月售{{}}份</span>
                        <span>好评率{{}}%</span>
                      </p>
                      <!-- 食物活动 -->
                      <p class="food_activity">
                        <span>活动</span>
                      </p>
                    </section>
                  </router-link>
                  <!-- 食物描述底部 -->
                  <footer class="menu_detail_footer">
                    <!-- 价格显示 -->
                    <section class="food_price">
                      <span>$</span>
                      <span>{{}}</span>
                      <span>起</span>
                    </section>
                  </footer>
              </section>
            </li>
          </ul>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      baseImageUrl: 'https://elm.cangdu.org/img/'
    }
  },
  computed: {

  },
  mounted() {
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.food_container
  width 100%
  height 100%
  .menu_container
    width 100%
    height 100%
    display flex
    .menu_left
      flex 1
      ul
        .menu_left_li
          height 60px
    .menu_right
      flex 3
      ul
        li
          .menu_detail_header
            height 40px
            display flex
            .menu_detail_header_left
              flex 2
            .menu_detail_header_right
              width 30px
          .menu_detail_list
            .menu_detail_link
              display flex
              .menu_food_img
                flex 1
                >img 
                  width 47px
              .menu_food_description
                flex 4
</style>
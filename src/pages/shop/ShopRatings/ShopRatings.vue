<template>
  <div>
    <section class="rating_container">
      <section>
        <!-- 头部评价 -->
        <header class="rating_header">
          <section class="rating_header_left">
            <p></p>
            <p>综合评价</p>
            <p>高于周边商家</p>
          </section>
          <section class="rating_header_right">
            <p>
              <span>服务态度</span>
              <span>星星</span>
              <span class="rating_num">评分</span>
            </p>
            <p>
              <span>菜品评价</span>
              <span>星星</span>
              <span class="rating_num">菜品评价</span>
            </p>
            <p>
              <span>送达时间</span>
              <span>分钟</span>
            </p>
          </section>
        </header>
        <!-- 评价标签 -->
        <ul class="tag_list_ul">
          <li></li>
        </ul>
        <!-- 评价回复 -->
        <ul class="rating_list_ul">
          <li class="rating_list_li">
            <!-- 左边头像 -->
            <img src="" alt="" class="user_avatar">
            <!-- 右边详情 -->
            <section class="rating_list_details">
              <!-- 详情头部 -->
              <header>
                <section class="username_star">
                  <p class="username">名字</p>
                  <p class="star_desc">
                    <span></span>
                    <span class="time_spent_desc"></span>
                  </p>
                </section>
                <!-- 时间 -->
                <span class="rated_at">时间</span>
              </header>
              <!-- 评价图片 -->
              <ul class="food_img_ul">
                <li>
                  <img src="" alt="">
                </li>
              </ul>
              <!-- 食物名称 -->
              <ul class="food_name_ul">
                <li>食物名称</li>
              </ul>
            </section>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.rating_container
  width 100%
  height 100%
  section
    width 100% 
    .rating_header
      display flex
      height 120px
      background-color #f00
      .rating_header_left
        flex 2
      .rating_header_right
        flex 3
    .tag_list_ul
      background-color #0f0
      display block
      width 100%
      height 150px
    .rating_list_ul
      background-color #fff
      .rating_list_li
        display flex
        .user_avatar
          flex 1
          background-color #00f
        .rating_list_details
          flex 5
</style>
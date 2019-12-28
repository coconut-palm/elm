<template>
  <div class="shop_container">
    <ul class="shop_list">
      <li class="shop_li" v-for="(shop,index) in shops" :key="index">
        <a class="clearfix" href>
          <div class="shop_left">
            <img class="shop_img" src />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header clearfix">
              <h4 class="shop_title">{{shop.name}}</h4>
              <ul class="shop_detail_ul">
                <li
                  class="supports"
                  v-for="(support, index) in shop.supports"
                  :key="index"
                >{{support.icon_name}}</li>
              </ul>
            </section>
            <section class="shop_rating_order clearfix">
              <section class="shop_rating_order_left">
                <h1></h1>
                <div class="rating_section">{{shop.rating}}</div>
              </section>
              <div class="order_section">月售{{shop.recent_order_num}}单</div>
            </section>
            <section class="shop_rating_order_right">
              <span class="delivery_style delivery_right">{{shop.delivery_mode.text}}</span>
            </section>
            <section class="shop_distance clearfix">
              <p class="shop_delivery_msg">
                <span>${{shop.float_minimum_order_amount}}起送</span>
                <span class="segmentation">/</span>
                <span>配送费约${{shop.float_delivery_fee}}</span>
              </p>
            </section>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      baseImageUrl: "https://fuss10.elemecdn.com/"
    };
  },
  created() {},
  methods: {},
  computed: {
    ...mapState(["shops"])
  }
};
</script>

<style scoped>
.shop_container {
  margin-bottom: 50px;
}
.shop_list .shop_li {
  border-bottom: 1px solid #f1f1f1;
  width: 100%;
}
.shop_li a {
  display: block;
  box-sizing: border-box;
  padding: 15px 8px;
  width: 100%;
}
.shop_left {
  float: left;
  box-sizing: border-box;
  width: 23%;
  height: 75px;
  padding-right: 10px;
}
.shop_img {
  display: block;
  width: 100%;
  height: 100%;
}
.shop_right {
  float: right;
  width: 77%;
}
.shop_detail_header {
  width: 100%;
}
.shop_title {
  float: left;
  width: 200px;
  color: #333;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
}
.shop_title::before {
  content: "品牌";
  display: inline-block;
  font-size: 11px;
  line-height: 11px;
  color: #333;
  background-color: #ffd930;
  padding: 1px 2px;
  border-radius: 2px;
  margin-right: 5px;
}
.shop_detail_ul {
  float: right;
  margin-top: 3px;
}
.supports {
  float: left;
  font-size: 10px;
  color: #999;
  border: 1px solid #f1f1f1;
  padding: 0 2px;
  border-radius: 2px;
}
.shop_rating_order {
  width: 100%;
  margin-top: 18px;
  margin-bottom: 8px;
}
.shop_rating_order_left {
  float: left;
  color: #ff9a0d;
}
.rating_section {
  float: left;
  font-size: 10px;
  color: #ff6000;
  margin-left: 4px;
}
.order_section {
  float: left;
  font-size: 10px;
  color: #666;
  transform: scale(0.8);
}
.shop_rating_order_right {
  float: right;
  font-size: 0;
}
.delivery_style {
  transform-origin: 35px 0;
  transform: scale(0.7);
  display: inline-block;
  font-size: 12px;
  padding: 1px;
  border-radius: 2px;
}
.delivery_right {
  color: #02a774;
  border: 1px solid #02a774;
}
.shop_distance {
  width: 100%;
  font-size: 12px;
}
.shop_delivery_msg {
  float: left;
  transform-origin: 0;
  transform: scale(0.9);
  color: #666;
}
.segmentation {
  color: #ccc;
}
</style>
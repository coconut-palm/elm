<template>
  <div class="shop_container">
    <ul class="shop_list" v-if="shops.length">
      <router-link :to="{path: 'shop', query:{id: shop.id}}" class="shop_li" v-for="shop in shops" :key="shop.id" @click="$router.push('/shop')">
        <a class="clearfix" href>
          <div class="shop_left">
            <img class="shop_img" :src="baseImageUrl + shop.image_path" />
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
                <Star :score="shop.rating" :size="24"></Star>
                <div class="rating_section">{{shop.rating}}</div>
                <div class="order_section">月售{{shop.recent_order_num}}单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">{{shop.delivery_mode.text}}</span>
                <span class="delivery_style delivery_right">准时达</span>
              </section>
            </section>
            <section class="shop_distance clearfix">
              <p class="shop_delivery_msg">
                <span>${{shop.float_minimum_order_amount}}起送</span>
                <span class="segmentation"> / </span>
                <span>配送费约${{shop.float_delivery_fee}}</span>
              </p>
              <section class="distance_time">
                <span v-if="Number(shop.distance)">
                  {{shop.distance > 1000 ? (shop.distance/1000).toFixed(2) + 'km' : shop.distance + 'm'}}
                  <span
                    class="segmentation"
                  > / </span>
                </span>
                <span v-else>{{shop.distance}}</span>
                <span class="segmentation"> / </span>
                <span class="order_time">{{shop.order_lead_time}}</span>
              </section>
            </section>
          </div>
        </a>
      </router-link>
    </ul>
    <!-- 循环显示6个svg图片 -->
    <ul v-else>
      <li v-for="item in 6" :key="item">
        <img src="./images/shop_back.svg" alt="back">
      </li>
    </ul>
  </div>
</template>

<script>
import Star from '../star/star';
import { mapState } from "vuex";
export default {
  data() {
    return {
      baseImageUrl: "http://elm.cangdu.org/img/",
    };
  },
  components: {
    Star
  },
  mounted() {
     this.$store.dispatch("getShops");
     this.initData()
  },
  methods: {
    initData() {
    }
  },
  computed: {
    ...mapState(['shops'])
  }
};
</script>

<style scoped>
.shop_container {
  margin-bottom: 50px;
  height: 100%;
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
  margin-left: -13px;
  color: #02a774;
  border: 1px solid #02a774;
}
.shop_distance {
  display: block;
  width: 100%;
  font-size: 12px;
  margin-top: 12px;
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
.distance_time {
  float: right;
  transform: scale(0.9);
}
.distance_time span {
  color: #999;
}
.distance_time .order_time {
  color: blue;
}
</style>
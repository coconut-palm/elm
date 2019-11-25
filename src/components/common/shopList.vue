<template>
  <div class="shop_list">
    <div class="shop_list_container">
      <ul class="shop_list_ul">
        <li class="shop_list_li" v-for="(item,index) in list" :key="index">
          <!-- 左边图片 右边文字内容 -->
          <div class="shop_list_left">
            <img src="http://elm.cangdu.org/img/164ad0b6a3917599.jpg" alt="">
          </div>
          <div class="shop_list_right">
            <!-- 第一行内容 -->
            <h1 class="shop_list_h1">
              <div class="shop_list_h1_left">
                <div>{{item.name}}</div>
              </div>
              <div class="shop_list_h1_right">
                <ul>
                  <li class="super">保</li>
                  <li class="super">准</li>
                  <li class="super">票</li>
                </ul>
              </div>
            </h1>
            <!-- 第二行内容 -->
            <h2 class="shop_list_h2">
              <div>
                <div class="super2">星</div>
                <h4 class="super2">{{item.rating}}分数</h4>
                <h4 class="super2">{{item.recent_order_num}}单数</h4>
              </div>
              <div>
                <h4 class="super5">蜂鸟专送</h4>
                <h4 class="super5">准时达</h4>
              </div>
            </h2>
            <!-- 第三行内容 -->
            <h3 class="shop_list_h3">
              <div>
                <h4 class="super3">起送{{item.float_minimum_order_amount}}</h4>
                <h4 class="super3">配送费{{item.float_delivery_fee}}</h4>
              </div>
              <div>
                <h4 class="super4">距离{{item.distance}}</h4>
                <h4 class="super4">时间{{item.order_lead_time}}</h4>
              </div>
            </h3>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios"

// axios({
//   url: 'https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762'
// }).then(res => {
//   console.log(res.data[0]);
//   console.log(res.data[0].name);
//   console.log(res.data[0].rating);
//   console.log(res.data[0].recent_order_num);
//   console.log(res.data[0].float_minimum_order_amount);
//   console.log(res.data[0].float_delivery_fee);
//   console.log(res.data[0].distance);
//   console.log(res.data[0].order_lead_time);
// })

export default {
  name:"shopList",
  data() {
    return {
      name:'',
      rating:'',
      list:[]
    }
  },
  created() {
    this.getGoods()
  },
  methods: {
    getGoods(){
      axios({
  url: 'https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762'
}).then(res => {
  console.log(res.data[0]);
  console.log(res);
  this.list = res.data
  // this.name = res.data[0].name
  // console.log(res.data[0].rating);
  // console.log(res.data[0].recent_order_num);
  // console.log(res.data[0].float_minimum_order_amount);
  // console.log(res.data[0].float_delivery_fee);
  // console.log(res.data[0].distance);
  // console.log(res.data[0].order_lead_time);
})
    }
  },
}
</script>

<style scoped>
  .shop_list {
    position: absolute;
    top: 174px;
    /* background-color: pink; */
  }

  .shop_list_li {
    display: inline-block;
    position: relative;
    width: 300px;
    height: 80px;
  }

  .shop_list_container {
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #ccc;
  }

  .shop_list_left {
    width: 62px;
  }
  .shop_list_left img {
    width: 48px;
    height: 48px;
    margin-left: 7px;
    margin-top: 16px;
  }

  .shop_list_right {
    width: 230px;
    height: 80px;
    top: 0;
    right: 0;
    position: absolute;
  }

  .shop_list_h1 {
    position: absolute;
    display: inline-block;
    width: 230px;
    height: 16px;
    margin: 16px 7px 0 0;
    /* background-color: blue; */
  }

  .shop_list_h1_left {
    position: absolute;
    height: 16px;
  }

    .shop_list_h1_left div {
      height: 16px;
      font-size: 14px;
    }

  .shop_list_h1_right {
    position: absolute;
    font-size: 14px;
    display: inline-block;
    right: 7px;
  }
  .super {
    float: right;
    right: 7px;
    margin: 0 7px 0 0;
  }
  .shop_list_h2 {
    position: absolute;
    display: inline-block;
    width: 230px;
    height: 13px;
    margin: 40px 7px 0 0;
    /* background-color: #000; */
    /* z-index: 2; */
  }

  .shop_list_ul {
    height: 700px;
  }

  .super2 {
    float: left;
    margin: 0;
    font-size: 14px;
  }

  .shop_list_h3 {
    position: absolute;
    display: inline-block;
    width: 230px;
    height: 13px;
    margin: 60px 7px 0 0;
    /* background-color: pink; */
  }
  .super3 {
    float: left;
    margin: 0;
    font-size: 14px;
  }
  .super4 {
    float: right;
    margin: 0;
    font-size: 14px;
  }
  .super5 {
    float: right;
    margin: 0;
    font-size: 14px;
  }
</style>
<template>
  <section class="home">
    <!-- 首页头部区域 -->
    <!-- 使用 :title 来给头部组件传递数据 -->
    <headerTop :title="address.address">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-search"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo&&userInfo.user_id? '/user/info' : '/login'">
        <span class="header_login_text" v-if="userInfo.user_id">
          <i class="iconfont icon-profile"></i>
        </span>
        <span class="header_login_text" v-else>登录|注册</span>
      </router-link>
    </headerTop>

    <!-- 首页导航轮播图 -->
    <nav class="home_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(pages,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(data,index) in pages" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl+data.image_url" />
              </div>
              <span>{{data.title}}</span>
            </a>
          </div>
        </div>
        <!-- swiper轮播图圆点 -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- 轮播图背景图片 -->
      <img src="./images/msite_back.svg" alt="back" v-else>
    </nav>

    <!-- 首页附近商家列表 -->
    <div class="home_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-calendar"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <shopList></shopList>
    </div>
  </section>
</template>

<script>
import headerTop from "../../components/headerTop/headerTop";
import shopList from "../../components/shopList/shopList";

// 引入swiper文件
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

// 利用mapState语法糖去读取state对象
import { mapState } from "vuex";

export default {
  data() {
    return {
      baseImageUrl: "https://fuss10.elemecdn.com"
    };
  },
  components: {
    headerTop,
    shopList
  },
  created() {},
  methods: {},
  computed: {
    ...mapState(["address", "categorys", "userInfo"]),
    /*
    根据categorys一维数组生成一个2维数组
    小数组中的元素个数最大是8
    */
    categorysArr() {
      // 1.先从当前组件中得到所有食品分类的一维数组
      const { categorys } = this;
      // 2.准备一个空的二维数组--categorysArr
      const arr = [];
      // 3.准备一个小数组--pages(最大长度为8)
      let minArr = [];
      // 4.遍历categorys得到处理后的二维数组catagorysArr
      categorys.forEach(data => {
        // 如果当前小数组(pages)已经满了, 创建一个新的
        if (minArr.length === 8) {
          minArr = [];
        }
        // 如果minArr是空的, 将小数组(pages)保存到大数组(categorysArr)中
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        // 将当前分类信息保存到小数组(pages)中
        minArr.push(data);
      });
      return arr;
    }
  },
  watch: {
    categorys(value) {
      // 在修改数据之后立即使用它，然后等待 DOM 更新。
      this.$nextTick(() => {
        // 一旦完成界面更新, 立即执行回调
        new Swiper(".swiper-container", {
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  },
  mounted() {
    // 忘记方法名时查看Action.js
    this.$store.dispatch("getCategorys");
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  overflow: hidden;
}
.header_search {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 50%;
}
.header_search .icon-search {
  font-size: 25px;
  color: #fff;
}
.header_login {
  position: absolute;
  font-size: 14px;
  color: #fff;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}
.home_nav {
  margin-top: 45px;
  height: 200px;
  background-color: #fff;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.link_to_food {
  width: 25%;
}
.food_container {
  display: block;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  font-size: 0;
}
.food_container img {
  display: inline-block;
  width: 50px;
  height: 50px;
}
.link_to_food span {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 13px;
  color: #666;
}
.home_shop_list {
  border-top: 1px solid #e4e4e4;
  margin-top: 10px;
  background: #fff;
}
.shop_header {
  padding: 10px 10px 0;
}
.shop_header_title {
  color: #999;
  font-size: 14px;
  line-height: 20px;
  padding-left: 5px;
}
</style>
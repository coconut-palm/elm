<template>
  <section class="home">
    <!-- 首页头部区域 -->
    <headerTop>
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-search"></i>
      </router-link>
      <router-link class="header_login" slot="right" to="/login">
        <span class="header_login_text">登录|注册</span>
      </router-link>
    </headerTop>

    <!-- 首页导航轮播图 -->
    <nav class="home_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(pages,index) in arr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(data,index) in pages" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl+data.image_url" />
              </div>
              <span>{{data.title}}</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <img src alt />
    </nav>

    <!-- 首页附近商家列表 -->
    <div class="home_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-calendar"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
    </div>
  </section>
</template>

<script>
import headerTop from "../../components/headerTop/headerTop";

// 引入swiper文件
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  data() {
    return {
      baseImageUrl: "https://fuss10.elemecdn.com",
      arr: [],
      minArr: []
    };
  },
  components: {
    headerTop
  },
  created() {
    this.getCategorys();
  },
  mounted() {},
  methods: {
    async getCategorys() {
      const { data: res } = await this.$http.get("v2/index_entry");
      const arr = [];
      let minArr = [];
      this.arr = arr;
      this.minArr = minArr;
      res.forEach(data => {
        if (minArr.length === 8) {
          minArr = [];
        }

        if (minArr.length === 0) {
          arr.push(minArr);
        }

        minArr.push(data);
      });
    }
  },
  computed: {},
  watch: {
    arr(value) {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  }
};
</script>

<style scoped>
.home {
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
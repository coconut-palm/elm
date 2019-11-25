<template>
    <div class="headerstyle">
      <mt-swipe :auto="4000">
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>


export default {
  name:"home",
  components:{
  }
}
</script>

<style scoped>
.headerstyle {
 
}

.mint-swipe {
  top: 44px;
  height: 130px;
}

.mint-swipe .mint-swipe-item:nth-child(1) {
  background: url("../assets/img/focus1.jpg");
}
.mint-swipe .mint-swipe-item:nth-child(2) {
  background: url("../assets/img/focus2.jpg");
}
.mint-swipe .mint-swipe-item:nth-child(3) {
  background: url("../assets/img/focus3.jpg");
}

</style>
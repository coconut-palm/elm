<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text">武汉市芜湖市</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 45px;
  background-color: #02a774;
}
.header_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  text-align: center;
  color: #fff;
}
.header_title_text {
  font-size: 20px;
  display: block;
}
</style>
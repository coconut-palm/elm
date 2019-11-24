<template>
  <div>

  </div>
</template>

<script>
import axios from "axios"

axios({
  url: 'https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762'
}).then(res => {
  console.log(res);
})

export default {
  name:"shopList"
}
</script>

<style scoped>
  
</style>
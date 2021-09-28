<template>
  <div>
      <div v-for="(item,index) in getCartList" :key="index">
        <CartListItem :product="item"></CartListItem>
      </div>   
  </div>
</template>

<script>
import CartListItem from "./CartListItem.vue"

import {mapGetters} from "vuex"

export default {
    components:{
        CartListItem
    },
    mounted(){
      console.log(this.getCartList)
    },
    computed:{
        ...mapGetters(["getCartList"]),
        // getCartList(){
        //   return this.$store.state.cartList
        // }
    }
}
</script>

<style>

</style>
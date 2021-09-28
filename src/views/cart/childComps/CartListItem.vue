<template>
  <div class="product_item">
    <div class="left_wrapper" @click="checkClick">
      <CartCheckBotton :isActive="product.isActive"></CartCheckBotton>
    </div>
    <div class="center_wrapper">
      <img :src="product.img" alt="img">
    </div>
    <div class="right_wrapper">
      <div class="pro_title">{{product.title}}</div>
      <div class="pro_desc">{{product.desc}}</div>
      <div class="pro_bottom">
        <span class="pro_price">￥{{product.price}}</span>
        <span class="pro_count">X{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CartCheckBotton from "./CartCheckButton.vue"

export default {
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    checkClick(){ 
      // this.product.isActive = !this.product.isActive
      this.$store.dispatch("changeActive",this.product.iid)
    }
  },
  computed:{
  },
  components:{
    CartCheckBotton
  }
}
</script>

<style scoped>
  .product_item{
    display: flex;
    padding-top: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
  .left_wrapper{
    flex: 0.1;
  }
  .center_wrapper{
    flex: 0.2;
  }
  .center_wrapper img{
    width: 80px;
    height: 100px;
    border-radius: 5px;
  }
  .right_wrapper{
    flex: 0.7;
    flex-wrap: wrap;
    height: 100%;
    margin-left: 20px;
  }
  .pro_title{
    width:200px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    height: 35px;
    font-size: 18 px;
    color: #333;
    line-height: 20px;
  }
  .pro_desc{
    width:200px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    height: 35px;
    font-size: 14px;
    line-height: 20px;
  }
  .pro_bottom{
    width:200px;
    position: relative;
    top: -20px;
  }
  .pro_bottom .pro_price{
    float: left;
    font-size: 20px;
    color: var(--color-tint);
  }
  .pro_bottom .pro_count{
    float: right;
  }


</style>
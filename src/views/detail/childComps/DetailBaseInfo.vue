<template>
  <div class="base_info">
      <!-- {{baseInfo}} -->
      <div class="title">
          {{baseInfo.detailInfo}}
      </div>
      <div class="price_wrapper">
          <div class="new_price">{{baseInfo.price}}</div>
          <div class="old_price">{{baseInfo.oldPrice}}</div>
          <div class="discountDesc">{{baseInfo.discountDesc}}</div>
      </div>
      <div class="columns">
          <div v-for="item in baseInfo.columns" :key="item">{{item}}</div>
      </div>
      <div class="services">
          <div v-for="(item,index) in baseInfo.services" :key="index">
              <img :src='item.icon' alt="img">
              <span>{{item.name}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        baseInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
    .base_info{
        width: 95%;
        margin: 10px auto;
        position: relative;
    }
    .price_wrapper{
        display: flex;
        margin: 10px 0;
    }
    .price_wrapper .new_price{
        color: var(--color-high-text);
        font-size: 24px;
    }
    .price_wrapper .old_price{
        text-decoration: line-through;
        font-size: 13px;
        margin-top: 10px;
        margin-left: 5px;
        color: #999;
    }
    .price_wrapper .discountDesc{
        margin-left: 5px;
        background-color: var(--color-high-text);
        font-size: 12px;
        margin-top: 9px;
        color: #fff;
        padding:2px 5px;
        border-radius: 8px;
        position: relative;
        top: -5px;
    }
    .columns{
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
        border-bottom: 1px solid rgb(100, 100, 100,0.1);
    }
    .columns div{
        /* flex: 1; */
        font-size: 13px;
        color: #999;
    }
    .services{
        display: flex;
        font-size: 13px;
        color: #333;
        justify-content: space-between;
        margin: 12px 0;        
    }
    .services img{
        width: 13px;
        height: 13px;
    }

</style>
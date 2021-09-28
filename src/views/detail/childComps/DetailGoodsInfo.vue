<template>
  <div class="goods_info">
      <div class="top_detail">
          <div class="left"></div>
          <div>{{goodsInfo.desc}}</div>
          <div class="right"></div>
      </div>
      <div v-for="(item,index) in goodsInfo.detailImage" :key="index"
      class="img_wrapper">
            <div class="key">{{item.key}}</div>
            <div v-for="(img) in item.list" :key="img">            
              <img :src="img" alt="img" class="img" @load="detailImgLoad">
            </div>
      </div> 
  </div>
</template>

<script>
export default {
    props:{
        goodsInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        detailImgLoad(){
            this.$emit("detailImgLoad")
        }
    }
}
</script>

<style scoped>
    .top_detail{
        width: 90%;
        margin: 30px auto;
        font-size: 14px;
        color: #666;
    }
    .left,.right{
        height: 1px;
        width: 90px;
        background-color: #a3a3a5;
    }
    .left{
        float: left;
        position: relative;
        top: -10px;
    }
    .right{
        float: right;
        position: relative;
        top: 10px;
    }
    .left::before{
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: black;
        top: -5px;
    }
    .right::after{
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: black;
        right: 0;
        top: -5px;
    }
    .img_wrapper{
        font-size: 15px;
        color: #333;
    }
    .key{
        margin-left: 15px;
        margin-bottom: 10px;
    }
    .img{
        width: 100%;
    }
</style>
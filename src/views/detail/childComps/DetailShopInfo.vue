<template>
  <div class="shop_info">
      <div class="logo">
        <img :src="shopInfo.logo" alt="logo">
        <span class="name">{{shopInfo.name}}</span>
      </div>
      <div class="content">
        <div class="left">
          <span class="sells">
            <div class="s1">{{shopInfo.sells | getInt}}</div>
            <div class="s2">总销量</div>
          </span> 
          <span class="count">
            <div class="c1">{{shopInfo.goodsCount}}</div>
            <div class="c2">全部宝贝</div>
          </span>
        </div>
        <table class="right">
          <tr class="tr" v-for="(item,index) in shopInfo.score" :key="index">
            描述相符<span :class="item.isBetter?'high_color':'low_color'">{{item.score}}</span>
            <!-- {{item}} -->
            <span :class="item.isBetter?'high':'low'">{{item.isBetter?"高":'低'}}</span>
          </tr>
        </table>
      </div>
      <div class="bottom_btn">进店逛逛</div>
  </div>
</template>

<script>
export default {
  props:{
    shopInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    sells(){
      let sells = this.shopInfo.sells
      sells = (sells / 10000).toFixed(1)
      return sells + "万"
    }
  },
  filters:{
    getInt(value){
      return (value / 10000).toFixed(1) + "万"
    }
  }
}
</script>

<style scoped>
  .shop_info{
    padding: 25px 8px;
    border-top: 5px solid #f2f5f8;
    border-bottom: 5px solid #f2f5f8;
  }
  .logo{
    height: 45px;
      margin-bottom: 30px;
  }
  .logo img{
    width: 45px;
    height: 45px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .logo .name{
    /* display: inline-block;
    height: 45px;
    line-height: 45px; */
    position: relative;
    top: -15px;
  }

  .content{
    width: 85%;
    margin: 0 auto;
    display: flex;
  }
  .content .left,.right{
    width: 50%;
  }
  .content .left{
    display: flex;
    border-right: 1px solid rgba(0,0,0,.1);
    height: 100%;
  }
  .content .left span{
    flex: 1;
    color: #333;
  }
  .content .left .s1,.c1{
    font-size: 18px;
    margin-bottom: 10px;
  }
  .content .left .s2,.c2{
    font-size: 12px;
    text-align: left;
  }
  .content .right{
    font-size: 13px;
    color: #333;
    padding-left: 30px;
    position: relative;
    top: -15px;
  }
  .content .right .tr{
    margin-top: 10px;
    height: 25px;
    /* line-height: 30px; */
  }
  .content .right tr span{
    margin-left: 10px;
  }

  .content .right tr .low{
    display: inline-block;
    background-color: #5ea732;
    color: #fff;
  }
  .content .right tr .high{
    display: inline-block;
    background-color: #f13e3a;
    color: #fff;
  }
  .high_color{
    color:#f13e3a;
  }
  .low_color{
    color:#5ea732 ;
  }










  .bottom_btn{
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    margin: 0 auto;
    line-height: 30px;
    border-radius: 10px;
    /* margin-top: 10px; */
  }

</style>
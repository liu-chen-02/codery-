<template>
  <div class="detail_button_bar">
      <div class="left_wrapper">
        <div>
            <i class="service icon"></i>
            <span>客服</span>
        </div>
        <div>
            <i class="store icon"></i>
            <span>店铺</span>
        </div>
        <div>
            <i class="collect icon"></i>
            <span>收藏</span>
        </div>
      </div>
      <div class="right_wrapper">
          <div class="cart" @click="addCart">加入购物车</div>
          <div class="buy">购买</div>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        addCart(){
            this.$emit("addCart")
        }
    }
}
</script>

<style>
    .detail_button_bar{
        height: 55px;
        width: 100%;
        position: fixed;
        /* background-color: burlywood; */
        bottom: 0;
        display: flex;
    }
    .left_wrapper{
        width: 50%;
        display: flex;
        height: 55px;
        background-color: #fff;
        line-height:77px;
        font-size: 14px;
    }
    .left_wrapper div{
        flex: 1;
        text-align: center;
    }
    .left_wrapper span{
        position: relative;
        bottom: 25px;
    }
    .icon{
        display: block;
        width: 22px;
        height: 22px;
        /* background-image: url("~assets/img/detail/detail_bottom.png"); */
        background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
        margin: 0 auto;
        margin-top: 6px;
    }
    .service{
        background-position: 0 -53px;
    }
    .store{
        background-position: 0 -98px;
    }
    .right_wrapper{
        width: 50%;
        display: flex;
        height: 55px;
        line-height: 55px;
        text-align: center;
    }
    .cart{
        background-color: rgb(255, 183, 2);
        color: #333;
        width: 60%;
    }
    .buy{
        background-color: rgb(250, 80, 117);
        width: 40%;
        color: #fff;
    }

</style>
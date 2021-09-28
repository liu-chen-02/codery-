<template>
  <div>
    <NavBar>
      <div slot="center">购物车（{{getCartListLength}}）</div>
    </NavBar>
    <div class="wrapper">
      <Scroll ref="scroll">
        <CartList></CartList>
      </Scroll>
    </div>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import CartList from "./childComps/CartList.vue"
import CartBottomBar from "./childComps/CartBottomBar.vue"
import {getGoodsDetail,BaseInfo} from "@/network/detail"
import Scroll from "@/components/common/scroll/Scroll.vue"

import {mapGetters} from "vuex"

export default {
  data(){
    return {
      //测试编写暂时代码
      product:{},
      baseInfo:{},
      topImages:[]
      //-------
    }
  },
  created(){
    //测试编写暂时代码
    getGoodsDetail("1m70y5k").then((res) => {
      let data = res.result
      this.baseInfo = new BaseInfo(data)
      this.topImages = res.result.itemInfo.topImages
      this.product.img = this.topImages[0]
      this.product.title = this.baseInfo.detailInfo
      this.product.price = this.baseInfo.lowNowPrice
      this.product.desc = this.baseInfo.desc
      this.product.iid = this.baseInfo.iid
      this.$store.dispatch("addToCart",this.product)
    })
    //-------
  },
  activated(){
    this.$refs.scroll.fresh()
  },
  components:{
      NavBar,
      CartList,
      Scroll,
      CartBottomBar
  },
  computed:{
    ...mapGetters(['getCartListLength'])
  }
}
</script>

<style scoped>

  .wrapper{
    height: calc(100vh - 93px);
    width: 100%;
    overflow: hidden;
  }
  .poem{
    display: block;
    width: 40%;
    margin:  auto;
  }
</style>
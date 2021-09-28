<template>
  <div id="detail">
      <DetailNavBar class="navbar"
      @jumpLink="jumpLink"
      ref="navbar"></DetailNavBar>
      <Scroll class="content" ref="scroll"
      :probeType="3"
      @contentScroll="contentScroll">
        <!-- <DetailComment :comments="comments"></DetailComment> -->
        <DetailSwiper :topImages="topImages"></DetailSwiper>
        <DetailBaseInfo :baseInfo="baseInfo"></DetailBaseInfo>
        <DetailShopInfo :shopInfo="shopInfo"></DetailShopInfo>
        <DetailGoodsInfo :goodsInfo="goodsInfo"
        @detailImgLoad='detailImgLoad'></DetailGoodsInfo>
        <DetailParamInfo :goodsParam="goodsParam" ref="gp"></DetailParamInfo>
        <DetailComment :comments="comments" ref="gc"></DetailComment>
        <GoodsList :goods="recommend" ref="gr"></GoodsList>
      </Scroll>
      <BackTop @click.native="backTop" v-show="showBackTop"></BackTop>
      <DetailButtonBar @addCart="addCart"></DetailButtonBar>
      <!-- <Toast :toast="toast" v-show="toastShow"></Toast> -->
  </div>
</template>

<script>
import {getGoodsDetail,BaseInfo,ShopInfo,GoodsParam,getRecommend} from "@/network/detail"
import {backTop} from "@/common/mixin.js"
import {debounce} from "@/common/debounce.js"
import Scroll from "@/components/common/scroll/Scroll"
import GoodsList from "@/components/content/goods/GoodsList"
// import Toast from "@/components/content/toast/Toast"

import DetailNavBar from "./childComps/DetailNavBar.vue"
import DetailSwiper from "./childComps/DetailSwiper.vue"
import DetailBaseInfo from "./childComps/DetailBaseInfo"
import DetailShopInfo from "./childComps/DetailShopInfo"
import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
import DetailParamInfo from "./childComps/DetailParamInfo"
import DetailComment from "./childComps/DetailComment"
import DetailButtonBar from "./childComps/DetailButtonBar"

export default {
    name:"Detail",
    data(){
      return {
        iid:0,
        topImages:[],
        baseInfo:{},
        shopInfo:{},
        goodsInfo:{},
        goodsParam:{},
        comments:[],
        recommend:[],
        positions:[],
        product:{},
        toast:'',
        toastShow:false
      }
    },
    created(){
      // console.log(this.$route)
      //保存传入的iid
      this.iid = this.$route.params.iid
      getGoodsDetail(this.iid).then((res) => {
        // console.log(res.result)
        let data = res.result
        //保存轮播图图片
        this.topImages = res.result.itemInfo.topImages
        //获取并保存BaseInfo数据
        let baseInfo = new BaseInfo(data)
        this.baseInfo = baseInfo
        //保存ShopInfo数据
        let shopInfo = new ShopInfo(data.shopInfo)
        this.shopInfo = shopInfo
        //保存GoodsInfo的数据
        this.goodsInfo = data.detailInfo
        //保存GoodsParam的数据
        this.goodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        //获取GoodsComment的数据
        if(data.rate.list.length != 0){
          this.comments = data.rate.list
        }

        // this.positions = []
        // this.positions.push(0)
        // this.positions.push(this.$refs.gp.$el.offsetTop)
        // this.positions.push(this.$refs.gc.$el.offsetTop)
        // this.positions.push(this.$refs.gr.$el.offsetTop)
        // console.log(this.positions)
      })
      getRecommend().then(res => {
        this.recommend = res.data.list
      })
    },
    methods:{
      addCart(){
        this.product.img = this.topImages[0]
        this.product.title = this.baseInfo.detailInfo
        this.product.price = this.baseInfo.lowNowPrice
        this.product.desc = this.baseInfo.desc
        this.product.iid = this.iid

        this.$store.dispatch("addToCart",this.product).then(res => {
          //普通方式的封装
          // this.toast = res
          // this.toastShow = true
          // setTimeout(() => {
          //   this.toastShow = false
          // },1000)
          //插件形式的封装
          console.log(this.$toast)
          this.$toast.show(res,2000)
          
        })
      },
      detailImgLoad(){
        debounce(() => {
          this.positions = []
          this.positions.push(0)
          if(this.$refs.gp){
            this.positions.push(this.$refs.gp.$el.offsetTop)
            this.positions.push(this.$refs.gc.$el.offsetTop)
            this.positions.push(this.$refs.gr.$el.offsetTop)
          }
        },10)()
        // this.positions = []
        // this.positions.push(0)
        // this.positions.push(this.$refs.gp.$el.offsetTop)
        // this.positions.push(this.$refs.gc.$el.offsetTop)
        // this.positions.push(this.$refs.gr.$el.offsetTop)
        // console.log(this.positions)
      },
      jumpLink(index){
        this.$refs.scroll.scrollTo(0,-this.positions[index],100)
      },
      contentScroll(posistion){
        // console.log(posistion)
        // console.log(this.positions)
        let position = - posistion.y
        let positions = this.positions
        for (let i = 0; i < this.positions.length; i++) {
          if(
            (i<positions.length-1 && position > positions[i] && position < positions[i+1])
            ||
            (i== positions.length-1 && position > positions[i])){
            this.$refs.navbar.currentIndex = i
          }
        }
      }
    },
    updated(){
        // this.positions = []
        // this.positions.push(0)
        // this.positions.push(this.$refs.gp.$el.offsetTop)
        // this.positions.push(this.$refs.gc.$el.offsetTop)
        // this.positions.push(this.$refs.gr.$el.offsetTop)
        // console.log(this.positions)
    },
    mounted(){
      // 获取position111 !!!图片还未加载
      // this.positions = []
      // this.positions.push(0)
      // this.positions.push(this.$refs.gp.$el.offsetTop)
      // this.positions.push(this.$refs.gc.$el.offsetTop)
      // this.positions.push(this.$refs.gr.$el.offsetTop)
      // console.log(this.positions)
    },
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailComment,
      GoodsList,
      DetailButtonBar,
      // Toast
    },
    mixins:[backTop]
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 99;
    background-color: #fff;
    height: 2000px;
  }
  .navbar{
    position: fixed;
    z-index: 9;
    width: 100%;
  }
  .content{
    padding-top: 44px;
    height: calc(100vh);
    overflow: hidden;
  }

</style>
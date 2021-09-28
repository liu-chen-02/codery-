<template>
  <div id="home">
      <NavBar>
          <div slot="center">购物街</div>
      </NavBar>
      <TabControl :titles="titles" @tabClick="tabClick"
        ref="tabControlFixed" v-show="isTabFixed" class="fixedTab"></TabControl>
      <scroll class="content" 
      ref="scroll"
      :probeType = "3"
      @contentScroll="contentScroll"
      :pullUpLoad="true"
      @pullingUpHandler="pullingUpHandler"
      >
        <HomeSwiper :banners="banners"
        @swiperLoadOk="swiperLoadOk"></HomeSwiper>
        <HomeRecommend :recommends="recommends"></HomeRecommend>
        <home-feature></home-feature>
        <TabControl :titles="titles" @tabClick="tabClick"
        ref="tabControl"></TabControl>
        <GoodsList :goods="this.goods[currentType].list"
        @toDetail="toDetail"></GoodsList>
      </scroll>          

       <BackTop @click.native="backTop" v-show="showBackTop"></BackTop> 
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue"
import TabControl from "@/components/content/tabcontrol/TabControl.vue"
import GoodsList from "@/components/content/goods/GoodsList"
import Scroll from "@/components/common/scroll/Scroll"
import BackTop from "@/components/content/backtop/BackTop"

import HomeSwiper from "./childComps/HomeSwiper.vue"
import HomeRecommend from "./childComps/HomeRecommend.vue"
import HomeFeature from "./childComps/HomeFeature.vue"

import {getHomeMultidata,getHomeGoods} from "@/network/home.js"


export default {
  data(){
    return {
      //获取轮播图数据
      banners:[],
      recommends:[],
      titles:["流行","热销","上新"],
      goods:{
        "pop":{page:0,list:[]},
        "sell":{page:0,list:[]},
        "new":{page:0,list:[]}
      },
      currentType:"pop",
      showBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      scrollY:0
    }
  },

  created(){
    this.getHomeMultidata()

    this.getHomeGoods("pop")
    this.getHomeGoods("sell")
    this.getHomeGoods("new")
  },

  mounted(){
    //监听item中图片的加载
    const refresh = this.debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on("itemimageLoad",() => {
      // console.log("---")
      refresh()
    })
  },

  methods:{
    toDetail(iid){
      // console.log(iid)
      // this.$router.push({
      //   name:"detail",params: {iid}
      // })
      this.$router.push("detail/"+iid)
    },
    swiperLoadOk(){
      // console.log("swiperLoadOk")
      //获取tabControl的offsetTop
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      // console.log(this.tabOffsetTop)
    },
    //上拉加载更多
    pullingUpHandler(){
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.bs.finishPullUp()
    },
    contentScroll(position){
      // console.log(position.y)
      // if(position.y > -1500){
      //   this.showbacktop = false
      // }else{
      //   this.showbacktop = true
      // }
      //监听scroll的position
      this.showBackTop = position.y < -1500

      //判断是否吸顶
      this.isTabFixed =  (this.tabOffsetTop-44) < -position.y 
    },
    //反抖节流hanshu 
    debounce(func, delay=300) {
      let timer;
      return function(...args) {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
      }
    },
    backTop(){
      this.$refs.scroll.scrollTo(0,0,300)
    },
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = "pop"
          break;
        case 1:
          this.currentType = "sell"
          break;
        case 2:
          this.currentType = "new"   
          break 
      }
      //保持两个tbaControl的currentIndex一致
      this.$refs.tabControlFixed.i = index
      this.$refs.tabControl.i = index
    },
    getHomeMultidata(){
      return getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type){
      let page = ++this.goods[type].page
      return getHomeGoods(type,page).then(res => {
        // console.log(res)
        this.goods[type].list.push(...res.data.list)
      })
    }
  },
  
  activated(){
    this.$refs.scroll.fresh()
    this.$refs.scroll.scrollTo(0,this.scrollY,0)
    
  },

  deactivated(){
    this.scrollY = this.$refs.scroll.getScrollY()
  },

  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  }  
}
</script>

<style scoped>
  #home{
    width: 100vw;
    height: 100vh;
    position: relative;
  }
  .content{
    height: calc(100vh - 93px);
    width: 100%;
    overflow: hidden;
  }

  .fixedTab{
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    background-color: #fff;
    height: 44px;
    z-index: 9999;
  }

  /* .content {
    overflow: hidden;
    height: calc(100vh - 93px);
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  } */
</style>
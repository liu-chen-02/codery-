<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core" 
import PullUp from '@better-scroll/pull-up'
import ObserveImage from '@better-scroll/observe-image'
import ObserveDOM from '@better-scroll/observe-dom'
BScroll.use(ObserveDOM)
BScroll.use(ObserveImage)
BScroll.use(PullUp)

export default {
    data(){
        return {
            bs:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default(){
                return 3
            }
        },
        pullUpLoad:{
            type:Boolean,
            default(){
                return false
            }
        }
    },
    mounted(){
        this.bs = new BScroll(this.$refs.wrapper,{
            scrollY:true,
            click:true,
            probeType:this.probeType,
            pullUpLoad: this.pullUpLoad,
            observeDOM:true,
            observeImage:true    
        })
        if(this.probeType){
            this.bs.on("scroll",(posistion) => {
                this.$emit("contentScroll",posistion)
            })
        }
        if(this.pullUpLoad){
            this.bs.on('pullingUp',() => {
                console.log('上拉加载更多')
                this.$emit("pullingUpHandler")
            })
        }

    },
    methods:{
        scrollTo(x,y,time = 300){
            this.bs && this.bs.scrollTo(x,y,time)
        },
        refresh(){
            this.bs && this.bs.refresh()
        },
        getScrollY(){
            return this.bs?this.bs.y:0
        },
        fresh(){
            console.log("refresh")
            this.bs && this.bs.refresh()
        }
    }

}
</script>

<style scoped>
    /* .wrapper{
        height: calc(100vh - 93px);
    width: 100%;
    overflow: hidden;
    } */
</style>>

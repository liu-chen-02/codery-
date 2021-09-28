<template>
  <swiper class="swiper">
        <swiper-item v-for="item in banners" :key="item.title">
          <a :href="item.link">
            <img :src="item.image" @load="swiperLoadOk">
          </a>
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem}from "@/components/common/swiper/index.js"

export default {
    data(){
        return{
            //标识
            imgLoadOk:false
        }
    },
    props:{
        banners:{
            type: Array,
            default(){
                return []
            }
        }
    },
    methods:{
        swiperLoadOk(){
            if(this.imgLoadOk){
                return
            }
            this.$emit("swiperLoadOk")
            this.imgLoadOk = true
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style>
    
</style>
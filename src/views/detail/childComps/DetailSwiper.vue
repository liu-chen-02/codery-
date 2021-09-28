<template>
  <Swiper class="detail_swiper">
      <SwiperItem v-for="item in this.topImages" :key="item"
      >
          <img :src="item" alt="img" class="swiperItem">
      </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper/index"

export default {
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components: { 
      Swiper,
      SwiperItem 
    },

}
</script>

<style>
    .detail_swiper{
        height: 300px;
    }
</style>
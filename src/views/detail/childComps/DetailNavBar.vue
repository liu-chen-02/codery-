<template>
  <div>
      <NavBar class="goods_detail">
          <div slot="left" class="back" @click="backHandle">
              <img src="@/assets/img/common/back.svg" alt="">
          </div>
          <div slot="center" class="title">
              <div v-for="(item,index) in titles" :key="index"
              :class="index==currentIndex?'active':''"
              @click="changeIndex(index)"
              >
                  {{item}}
              </div>
          </div>
      </NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"

export default {
    data(){
        return {
            titles:["商品",'参数','评论','获取'],
            currentIndex:0
        }
    },
    methods:{
        changeIndex(index){
            this.currentIndex = index
            this.$emit("jumpLink",index)
        },
        backHandle(){
            this.$router.back()
        }
    },
    components:{
        NavBar
    }
}
</script>

<style>
    .goods_detail{
        background-color: #fff !important;
        position: relative;
        z-index: 999;
    }
    .back{
        position: relative;
        top: 6px;
    }
    .title{
        color: black !important;
        display: flex;
    }
    .title div{
        flex:1;
        font-size: 14px;
    }
    .active{
        color: var(--color-tint);
    }
</style>
<template>
  <div>
      <div class="rec_wrapper">
          <div class="rec_item" v-for="item in recommends" :key="item.title">
              <a :href="item.link">
                  <img :src="item.image" alt="">
                    <div class="title">{{item.title}}</div>
              </a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
    .rec_wrapper{
        display: flex;
        justify-content: space-around;
        width: 100%;
        padding-top: 10px;
        padding-bottom: 20px;
        border-bottom: 10px solid #eee;
    }
    .rec_wrapper .rec_item .title{
        font-size: 6px;
        text-align: center;
        margin-top: 8px;
    }
    .rec_item img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
</style>
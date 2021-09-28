<template>
  <div class="tab_control">
      <div v-for="(item,index) in titles" :key="item" class="item"
      @click="changeIndex(index)">
          <span :class="i == index?'active':''">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            i:0
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        changeIndex(index){
            //子传父
            this.$emit("tabClick",index)
            this.i = index
        }
    }
}
</script>

<style>
    .tab_control{
        display: flex;
        width: 100vw;
        margin-bottom: 20px;
    }
    .item{
        flex: 1;
        text-align: center;
        font-size: 15px;
         margin-top: 10px;
    }
    .item span{
        color: #666;
        padding-bottom: 5px;
    }

    .item .active{
        color: var(--color-tint);
        border-bottom: 3px solid var(--color-tint);
    }

</style>
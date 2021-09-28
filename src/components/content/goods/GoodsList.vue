<template>
    <div class="goods">
        <GoodsListItem 
        v-for="(item,index) in goods" :key="index" :goodsItem="item"
        @click.native="toDetail(item)"></GoodsListItem>
    </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue"

export default {
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        toDetail(item){
            this.$emit("toDetail",item.iid)
        }
    },
    components:{
        GoodsListItem
    }
}
</script>

<style>
    .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>
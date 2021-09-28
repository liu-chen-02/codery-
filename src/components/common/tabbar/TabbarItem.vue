<template>
    <div class="tabbar_item" @click="handleClick">
        <div v-if="!isActive">
            <slot name="item_icon" ></slot>
        </div>
        <div v-else>
            <slot name="item_icon_active"></slot>
        </div>
        <div :style="activeStyle" >
            <slot name="item_text"></slot>
        </div>       
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    props:{
        path:{
            type:String
        }
    },
    methods:{
        handleClick(){
            this.$router.replace(this.path).catch(err => err)
        }
    },
    computed:{
        //是否被选中
        isActive(){
            // console.log("isActive")
            return this.$route.path.indexOf(this.path) !== -1
        },
        // 选中后的样式
        activeStyle(){
            return this.isActive?"color:deepPink":""
        }
    }
}
</script>

<style>
  .tabbar_item{
    flex: 1;
    text-align: center;
    font-size: 8px;
    margin-top: 4px;
  }

  .tabbar_item img{
    width: 24px;
    vertical-align: middle;
    margin-bottom: 3px;
  }
</style>
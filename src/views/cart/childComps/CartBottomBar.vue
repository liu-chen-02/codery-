<template>
  <div class="bottom_bar">
      <div class="left" @click="selectAll">
          <CartCheckButton 
          class="check_botton" 
          :isActive="isSelectAll"
          ></CartCheckButton>
          <span>全选</span>
      </div>
      <div class="center">
          <span>合计 ￥{{totalPrice}}</span>
      </div>
      <div class="right">
          <span>去计算（{{checkedCount}}）</span>
      </div>
  </div>
</template>

<script>
import CartCheckButton from "./CartCheckButton.vue"
import {mapGetters} from "vuex"

export default {
    computed:{
        ...mapGetters(['getCartList']),
        totalPrice(){
            return this.getCartList.reduce((pre,item) => {
                return pre + item.count*item.price
            },0)
        },
        checkedCount(){
            return this.getCartList.filter((item) => {
                return item.isActive
            }).length
        },
        isSelectAll(){
            if(this.getCartList.length == 0) return false
            //方式一:filter
            let flag = this.getCartList.filter(item => {
                return item.isActive
            }).length == this.getCartList.length
            //方式二：find
            // let flag = !this.getCartList.find(item => !item.isActive)
            return flag
        }
    },
    components:{
        CartCheckButton
    },
    methods:{
        selectAll(){
            this.getCartList.forEach(item => {
                this.$store.dispatch("changeActive",item.iid)
            })
        }
    }
}
</script>

<style scoped>
    .bottom_bar{
        height: 35px;
        position: fixed;
        bottom: 49px;
        width: 100%;
        background-color: rgb(250, 222, 222);
        display: flex;
        line-height: 36px;
        font-size: 14px;
    }
    .left{
        height: 100%;
        display: flex;
        margin-left: 10px;
        margin-right: 15px;
        flex: 1;
    }
    .left .check_botton{
        position: relative;
        top: -5px;
        margin-right: 2px;
    }
    .left img{
        top: 0;
    } 
    .center{
        flex: 4;
    }
    .right{
        flex: 2;
        height: 100%;
        text-align: center;
        background-color: tomato;
    }
</style>
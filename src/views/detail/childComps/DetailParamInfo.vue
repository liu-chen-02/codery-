<template>
  <div class="param_wrapper">
      <!-- {{goodsParam}} -->
        <table v-for="(item,i) in goodsParam.sizes" :key="i"
        class="size_info">
            <tr v-for="(tr,index) in item" :key="index">
                <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
            </tr>
        </table>
        <table class="param_info">
            <tr v-for="(info, index) in goodsParam.infos" :key="index">
                <td class="param_info_key">{{info.key}}</td>
                <td class="param_value">{{info.value}}</td>
            </tr>
        </table>
        <!-- <div class="info-img" v-if="goodsParam.image.length !== 0">
            <img :src="goodsParam.image" alt="img">
        </div> -->
  </div>
</template>

<script>
export default {
    
    props:{
        goodsParam:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
    .param_wrapper{
        padding: 20px 15px;
        font-size: 14px;
        border-top: 5px solid #f2f5f8;
        border-bottom: 5px solid #f2f5f8;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }

    table tr {
        height: 42px;
    }

    table tr td {
        border-bottom: 1px solid rgba(100,100,100,.1);
    }

    .param_info_key {
        /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
        width: 95px;
    }

    .param_info {
        border-top: 1px solid rgba(0,0,0,.1);
    }

    .param_value {
        color: #eb4868
    }

    .info-img img {
        width: 100%;
    } 
</style>
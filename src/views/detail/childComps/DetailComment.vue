<template>
    <div class="comments_wrapper">
      <div class="top_info">
        <div>用户评价</div>
        <div>更多</div>
      </div>
      <div v-for="(item,index) in comments" :key="index"
      class="comments">
        <div class="user">
            <img :src="item.user.avatar"/>
            <span>{{item.user.uname}}</span>
        </div>    
        <div class="comment">
            <div class="content">{{item.content}}</div>
            <span class="time">{{item.created}}</span>
            <span class="style">{{item.style}}</span>
            <!-- <img src="" alt=""> -->
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        comments:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .comments_wrapper{
        /* position: relative;
        z-index: 999;
        top: 80px; */
        width: 98%;
        margin:0 auto;
        border-bottom: 5px solid #f2f5f8;
        padding: 20px;
    }
    .top_info{
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        height: 50px;
        line-height: 50px;
        /* background-color: coral; */
        border-bottom: 1px solid rgba(100,100,100,.2);
        font: #111;
        font-weight: 400;
    }
    .comments{
        margin-top: 20px;
    }
    .user{
        display: flex;
        line-height: 60px;
        font-size: 15px;
        font-weight: 550;
    }
    .user img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 10px;
    }    
    .content{
        font-size: 15px;
        margin: 10px 0;
    }
    .time,.style{
        margin-right: 6px;
        color: gray;
        font-size: 15px;
    }

</style>
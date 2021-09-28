<template>
  <div class="toast" v-show="isShow">
      <slot>{{toast}}</slot>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isShow:false,
            toast:'toast'
        }
    },
    methods:{
        show(toast,duration=2000){
            this.toast = toast
            this.isShow = true
            setTimeout(() => {
                this.isShow = false
            },duration)
        }
    }
}
</script>

<style>
    .toast{
        position: fixed;
        z-index: 999;
        top: 50%;
        right: 50%;
        background-color: rgba(151, 59, 59, 0.5);
        padding: 5px 10px;
        transform: translateX(50%);
        font-size: 16px;
        color: #fff;
    }
</style>
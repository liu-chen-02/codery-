<template>
  <div class="toast">
      <slot>{{toast}}</slot>
  </div>
</template>

<script>
export default {
    props:{
        toast:{
            type:String,
            default(){
                return "toast"
            }
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
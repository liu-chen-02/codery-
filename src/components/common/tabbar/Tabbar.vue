<template>
  <!-- tabbar -->
    <div id="tabbar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  data(){
    return {}
  }
}
</script>

  
<style>
  #tabbar{
    width: 100%;
    height: 49px;
    background-color: rgb(245,244,245);
    /* background-color: pink; */
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid rgba(100,100,100,.3);
  }

</style>
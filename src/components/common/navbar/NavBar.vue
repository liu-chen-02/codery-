<template>
  <div id="navbar">
      <div ><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style>
    #navbar{
        background-color: var(--color-tint);
        display: flex;
        line-height: 44px;
        box-shadow:0 1px 1px rgba(100, 100, 100,0.2) ;
        position: sticky;
        width: 100%;
        top: 0;
        
        z-index: 999;
    }

    #navbar > div{
        flex: 1;
        text-align: center;
    }
    #navbar > .center{
        /* background-color: plum; */
        flex: 3;
        color:var(--color-background) ;
    }



</style>
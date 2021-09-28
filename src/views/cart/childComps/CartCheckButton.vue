<template>
  <div class="check_button">
      <img src="@/assets/img/cart/tick.svg" :class="this.isActive?'active':''">
  </div>
</template>

<script>
export default {
    props:{
        isActive:{
            type:Boolean,
            default(){
                return false
            }
        }
    }
}
</script>

<style scoped>
    .check_button img{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid rgb(201, 189, 189);
        position: relative;
        top: 10px;
    }
    .active{
        background-color: var(--color-tint);
    }
</style>
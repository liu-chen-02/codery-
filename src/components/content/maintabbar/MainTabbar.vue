<template>
    <div>
        <Tabbar>
            <TabbarItem path="/home">
                <img slot="item_icon" src="@/assets/img/tabbar/home.svg" alt="home">
                <img slot="item_icon_active" src="@/assets/img/tabbar/home_active.svg" alt="">
                <div slot="item_text">首页</div>
            </TabbarItem>
            <TabbarItem path="/category">
                <img slot="item_icon" src="@/assets/img/tabbar/category.svg" alt="category">
                <img slot="item_icon_active" src="@/assets/img/tabbar/category_active.svg" alt="">
                <div slot="item_text">分类</div>
            </TabbarItem>
            <TabbarItem path="/cart">
                <img slot="item_icon" src="@/assets/img/tabbar/shopcart.svg" alt="购物车">
                <img slot="item_icon_active" src="@/assets/img/tabbar/shopcart_active.svg" alt="购物车">
                <div slot="item_text">购物车</div>
            </TabbarItem>
            <TabbarItem path="/profile">
                <img slot="item_icon" src="@/assets/img/tabbar/profile.svg" alt="我的">
                <img slot="item_icon_active" src="@/assets/img/tabbar/profile_active.svg" alt="我的">
                <div slot="item_text">我的</div>
            </TabbarItem>
        </Tabbar>
    </div>
</template>

<script>
import Tabbar from "@/components/common/tabbar/Tabbar.vue"
import TabbarItem from "@/components/common/tabbar/TabbarItem.vue"

export default {
    components:{
        Tabbar,
        TabbarItem
    }
}
</script>

<style>

</style>
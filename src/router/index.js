import Vue from "vue"
import VueRouter from "vue-router"

import Cart from "@/views/cart/Cart"
import Home from "@/views/home/Home"
import Category from "@/views/category/Category"
import Profile from "@/views/profile/Profile"
import Detail from "@/views/detail/Detail"

//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
let routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/category",
    component:Category
  },
  {
    path:"/cart",
    component:Cart
  },
  {
    path:"/profile",
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]
let router =  new VueRouter({
  routes,
  mode:'history'
})

//3.导出路由
export default router 
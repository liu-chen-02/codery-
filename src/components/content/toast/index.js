import Vue from "vue"
import  ToastPlugin from "./ToastPlugin"

let obj ={}

obj.install = function () {
    //1.插件组件构造器
    let toastContrustor = Vue.extend(ToastPlugin)
    //2.new的方式，根据组件构造器，创建组件对象
    let toast = new toastContrustor()
    //3.将组件对象，挂载到某个元素上
    toast.$mount(document.createElement('div'))
    //4.toast.$el就是div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
}

export default obj
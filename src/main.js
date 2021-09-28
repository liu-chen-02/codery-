import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import toast from "@/components/content/toast/index.js"

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
Vue.use(toast)
Vue.use(VueLazyload,{
  loading: require('./assets/img/common/placeholder.png'), // 图片加载状态下显示的图片
})
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

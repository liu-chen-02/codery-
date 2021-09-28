import Vue from "vue"

export default {
    addCount(state,payload){
        payload.count++
        Vue.set(payload, payload.count, payload);
    },
    addProduct(state,payload){
        state.cartList.push(payload)
    },
    changeActive(state,payload){
        payload.isActive = !payload.isActive
        // 获取对象的key值Object.keys(xxx)[0]
        // console.log(payload.isActive)
        // console.log(state)
        // Vue.set(payload, 'isActive', !payload.isActive)
        Vue.set(payload, payload.isActive , payload)
    }
}
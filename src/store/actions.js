// import Vue from "vue"
export default {
    addToCart({state,commit},product){
        return new Promise((resolve,reject) => {
            let find = state.cartList.find(item => item.iid == product.iid)
            if(find){
                // console.log('addCount')
                commit("addCount",find)
                resolve("商品数量加一")
                return
            }else{
                // console.log("addProduct")
                product.count = 1
                product.isActive = false
                // Vue.set(product, 'isActive', false)
                commit("addProduct",product)    
                resolve("添加商品成功")
            }
            reject("error")
        })
    },
    changeActive({state,commit},proId){
        let find = state.cartList.find(item => item.iid == proId)
        commit("changeActive",find)
    }
}
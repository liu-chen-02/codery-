import {request} from "./request"

export function getGoodsDetail(iid){
    return request({
        url:'detail',
        params:{    
            iid
        }
    })
}

//基本信息类
export class BaseInfo{
    constructor(data){
        console.log(data)
        this.detailInfo = data.itemInfo.title
        this.iid = data.itemInfo.iid
        this.price = data.itemInfo.price
        this.desc = data.itemInfo.desc
        this.lowNowPrice = data.itemInfo.lowNowPrice
        this.oldPrice = data.itemInfo.oldPrice
        this.discountDesc = data.itemInfo.discountDesc
        this.columns = data.columns
        this.services = data.shopInfo.services
    }
} 

//商家信息类
export class ShopInfo{
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods
      }
}

export class GoodsParam{
    constructor(info, rule) {
      // 注: images可能没有值(某些商品有值, 某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
}

export function getRecommend(){
    return request({
        url:"recommend"
    })
}



//对backtop的封装
import BackTop from "@/components/content/backtop/BackTop"

export const backTop = {
    data(){
        return{
            showBackTop:false,
        }
    },
    methods:{
        backTop(){
            this.$refs.scroll.scrollTo(0,0,300)
        },
        contentScroll(position){
            this.showBackTop = position.y < -1000
        },
    },
    components:{
        BackTop
    }
}
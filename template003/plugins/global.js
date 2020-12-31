import Vue from 'vue'

const tools = {
    install (Vue) {
        Vue.prototype.tools = {
            adminId: 1,
            //禁止页面滑动
            stopMove() {
                let m = function(e){e.preventDefault();};
                document.body.style.overflow='hidden';
                document.addEventListener("touchmove",m,{ passive:false });
            },
            //开启页面滑动
            Move(){
                let m =function(e){e.preventDefault();};
                document.body.style.overflow='';//出现滚动条
                document.removeEventListener("touchmove",m,{ passive:true });
            },
        }
    }
}

Vue.use(tools)
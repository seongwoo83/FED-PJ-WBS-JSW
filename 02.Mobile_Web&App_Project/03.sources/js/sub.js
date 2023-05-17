import nav from "./nav.js";
import common from "./common.js";
import comData from "./data/data-com.js";
import store from "./data/store.js";
import subData from "./data/data-sub.js";

(()=>{
    let pm;
    // GET방식으로 넘어온 데이터 처리하여 분류별 서브페이지 구성하기
    // location.href -> 상단 url 읽어오기
    if (location.href.indexOf("?") !== -1) {
        if(location.href.indexOf("%20")!==-1){
            pm = location.href.split("?")[1].split("=")[1].split("%20")[0].toLowerCase();
        }else{
            pm = location.href.split("?")[1].split("=")[1].toLowerCase();
        }
        // pm에 값이 할당이 되어있다면 undefined가 아니므로 true
        if (pm) {
            store.commit("chgData", decodeURI(pm));
            // decodeURI() -> 변경할 문자열만 있어야 디코딩됨
            // decodeURIComponent() -> url전체에 섞여있어도 모두 디코딩
        } else {
            store.commit("chgData", "MEN");
        }
        store.commit("brdChange", 'all')
    }
})()

Vue.component("top-comp", {
    template: comData.topArea,
});
new Vue({
    el: "#top",
    mounted: function () {
        nav();
        common();
    }
});
const mainComp = {
    template: subData.list,
    data(){
        return{

        }
    },
    props:["myval"],
    methods:{
        chkNum(pm){
            console.log("자식");
            store.state.imgnum = pm["idx"];
        }
    }
}

const proComp = {
    template: subData.detail
}
new Vue({
    el:"#main",
    components:{
        "main-comp": mainComp
    },
    store,
    created:function(){
        // store.dispatch('initData')
    },
    mounted:function(){
        const behindImg = $(".behind_img");
        
        behindImg.on("mouseenter",function(){
            $(this).stop().animate({
                opacity:1
            },200)
        });
        behindImg.on("mouseout", function(){
            $(this).stop().animate({
                opacity:0
            })
        })
        
        const productPage = $(".product_wrap");
        const imgs = $(".list li");
        imgs.on("click", function () {
            productPage.show();
            $("body").css({
                overflow:"hidden"
            })
        } );
        
        const close = $(".close_btn");
        close.on("click", function (e) {
            e.preventDefault();
            $(this).parent().hide();
            $("body").css({
                overflow:"auto"
            })
        });
        
        function insComma(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };
        const gprice = $(".price");
        
        setInterval(() => {
            gprice.each((idx, ele)=>{
                let nprice= insComma($(ele).text());
                $(ele).text(nprice)
            });
        }, 1);
    },
})


Vue.component("foot-comp", {
    template: comData.infoArea,
});
new Vue({
    el: "#info",
});

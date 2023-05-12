import nav from "./nav.js";
import common from "./common.js";
import comData from "./data/data-com.js";
import store from "./data/store copy.js";
import subData from "./data/data-sub copy.js";

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
        store.dispatch('initData')
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
            const gname = $(this).attr("data-name");
            const result = store.state.items.filter(obj=> obj.name === gname);

            productPage.find("img").eq(0).attr("src", `./img/men/poloShirts/${result[0].idx}.jpg`)
            productPage.find("img").eq(1).attr("src", `./img/men/poloShirts-1/alt${result[0].idx}.jpg`)
            productPage.find(".pro_bra").text(result[0].brand).
            parent().siblings().find(".pro_tit").text(result[0].name).
            parent().siblings().find(".pro_price").text(result[0].price).
            parent().siblings().find(".pro_size").text(result[0].size);
        
            productPage.show();
        });
        
        const close = $(".close_btn");
        close.on("click", function (e) {
            e.preventDefault();
            $(this).parent().hide();
        });
    },
})


Vue.component("foot-comp", {
    template: comData.infoArea,
});
new Vue({
    el: "#info",
});

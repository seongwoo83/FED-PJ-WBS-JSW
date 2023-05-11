import nav from "./nav.js";
import common from "./common.js";
import comData from "./data/data-com.js";
import store from "./data/store.js";
import subData from "./data/data-sub.js";

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

Vue.component("main-comp",{
    template: subData.list
})
Vue.component("pro-comp",{
    template: subData.detail
})
new Vue({
    el:"#main",
    store,
    mounted:function(){
        const behindImg = $(".behind_img");

        behindImg.on("mouseenter",function(){
            $(this).animate({
                opacity:1
            },200)
        });
        behindImg.on("mouseout", function(){
            $(this).animate({
                opacity:0
            })
        })


        const productPage = $(".product_wrap");
        const imgs = $(".list li");
        imgs.on("click", function () {
            productPage.show();
        });

        const close = $(".close_btn");
        close.on("click", function () {
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
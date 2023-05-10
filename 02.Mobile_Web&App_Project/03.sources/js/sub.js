import nav from "./nav.js";
import common from "./common.js";
import comData from "./data/data-com.js";

Vue.component("top-comp", {
    template:comData.topArea
});
new Vue({
    el: "#top",
    mounted: function () {
        nav();
        common();

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
});

Vue.component("foot-comp",{
    template: comData.infoArea
});
new Vue({
    el:"#info"
});
window.addEventListener("DOMContentLoaded", function () {
    
    new Vue({
        el:"#top",
        data: {
            menus:{}
        },
        mounted:function(){
            axios.get("./js/json/gnb.json").then(x => this.menus = x);
        }
    });

});

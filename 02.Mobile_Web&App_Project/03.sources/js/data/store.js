import goods from "./product.js";
const store = new Vuex.Store({
    state: {
        goods,
        imgnum: 5,
        cat: "",
        catEn: "",
        gen: "",
        filter: [
            "Polo Ralph Lauren", 
            "Purple Label", 
            "Ralph Lauren Collection", 
            "Boys 2-7", 
            "Girls 7-16", 
            "Polo Ralph Lauren Home"
        ],
        // 브랜드 변수
        brand: [],
        pbrand:[],
        // 갯수 변수
        pnum: 0,
    },
    mutations: {
        upperPrice(dt, pm){
            // console.log(pm);
            let svalue = event.target.value;
            if(svalue == "cheap"){
                pm.prod = pm.prod.sort(function(a,b){
                    return a.price - b.price
                })
                store.commit('chgData', pm.catEn)
            }else if(svalue == "expen"){
                pm.prod = pm.prod.sort(function(a,b){
                    return b.price - a.price
                })
                store.commit('chgData', pm.catEn)
            }
        },
        chgData(dt, pm) {
            console.log("데이터변경", pm);
            dt.cat = dt.goods[pm].cat;
            dt.catEn = dt.goods[pm].catEn;
            dt.gen = dt.goods[pm];
            dt.pnum = dt.goods[pm].prod.length;
            console.log(dt.pnum);
            switch (pm){
                case  "men" : dt.brand = ["Polo Ralph Lauren", "Purple Label"]; break;
                case "women" : dt.brand = ["Polo Ralph Lauren", "Ralph Lauren Collection"]; break;
                case "kids" : dt.brand = ["Boys 2-7", "Girls 7-16"]; break;
                case "home" : dt.brand = ["Polo Ralph Lauren Home", null];
            }
        },

        brdChange(dt, pm) {
            console.log("브랜드 체인지", pm);
            if(pm == "all"){
                dt.pbrand = dt.brand;
            }else{
                dt.pbrand = [pm, null];
                // console.log(dt.gen.prod.filter(item=>item["brand"] == pm));
                // dt.pnum = dt.gen.prod.filter(item=>item["brand"] == pm).length
            }
        },

        addCart(dt, pm){
            // console.log(dt.gen.prod[pm]);
            window.localStorage.setItem(dt.gen.prod[pm].idx, JSON.stringify(dt.gen.prod[pm]))
            console.log(localStorage);
        }
    },
});

export default store;

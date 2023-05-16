import goods from "./product.js";
const store = new Vuex.Store({
    state:{
        goods,
        imgnum:5,
        cat:"",
        catEn:"",
        gen:"",
    },
    mutations:{
        chgData(dt, pm){ 
            console.log("데이터변경", pm);
            dt.cat = dt.goods[pm].cat;
            dt.catEn = dt.goods[pm].catEn;
            dt.gen = dt.goods[pm];
        },/////////////// chgData()

        // setData(st, pm){
        //     st.items = pm;
        //     console.log(st.items);
        // }
    },
    actions:{
        // initData(){
        //     const result = jsnData;
        //     // console.log('result ', result);
        //     this.commit('setData', result);
        // }
    }
})

export default store;
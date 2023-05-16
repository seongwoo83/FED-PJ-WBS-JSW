import {poloShirts,goods} from "./product.js";
// import jsnData from "../json/ralph_lauren.json" assert {type:"json"};
const store = new Vuex.Store({
    state:{
        goods,
        men:{
            cat:"남성",
            polo: poloShirts
        },
        women:{
            cat:"여성"
        },
        kids:{
            cat:"키즈"
        },
        home:{
            cat:"홈"
        },
        imgnum:5,
        // items:[]
        cat:"",
        catEn:"",
        gen:"",
    },
    mutations:{
        chgData(dt, pm){ //dt -> state 데이터 , pm -> 전달값
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
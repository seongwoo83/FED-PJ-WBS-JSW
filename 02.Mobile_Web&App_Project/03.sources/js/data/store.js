import poloShirts from "./men.js";
import jsnData from "../json/ralph_lauren.json" assert {type:"json"};
const store = new Vuex.Store({
    state:{
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
        items:{}
    },
    mutations:{
        setData(st, pm){
            st.items = pm;
            console.log(st.items);
        }
    },
    actions:{
        initData(){
            const result = jsnData;
            console.log('result ', result);
            this.commit('setData', result);
        }
    }
})

export default store;
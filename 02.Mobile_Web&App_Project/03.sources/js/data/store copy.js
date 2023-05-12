import poloShirts from "./men.js";
import jsnData from "../json/ralph_lauren.json" assert {type:"json"};
const store = new Vuex.Store({
    state:{
        items:{}
    },
    mutations:{
        setData(st, pm){
            st.items = pm;
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
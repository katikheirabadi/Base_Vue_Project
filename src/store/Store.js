import { createStore } from "vuex";

const store = createStore({
    state:{
       Array:{},
       count:0
    },
    mutations:{
        incrementCount(){
            state.count++;
        }
    }
})
export default store
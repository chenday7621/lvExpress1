import { createStore } from "vuex";

export default createStore({
  state: {
      count:0
  },
  getters: {
  },
  mutations: {
    setCount(state,n){
      state.count=n
    }
  },
  actions: {},
  modules: {},
});

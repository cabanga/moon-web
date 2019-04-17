import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: '000222', name: 'John Snow' },
    error: null
  },
  /*
  mutations: {
    [ERROR] (state) {
      state.error = state.error;
    }
  },
  */
  actions: {

  }
})

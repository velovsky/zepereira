import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loaded: false
  },
  getters: {
    isLoaded: function (state) {
      return state.loaded
    }
  },
  mutations: {
    updateLoadedState: function (state, isLoaded) {
      state.loaded = isLoaded
    }
  }
})

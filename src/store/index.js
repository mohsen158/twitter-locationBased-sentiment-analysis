import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coordinates: [1, 2],
  },
  mutations: {
    setCoordinates(state, coord) {
      state.coordinates = coord;
    },
  },
  actions: {
    setCoordinates({ commit }, coord) {
      commit("setCoordinates", coord);
    },
  },
  modules: {},
});

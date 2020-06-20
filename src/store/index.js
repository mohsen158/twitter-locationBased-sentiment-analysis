import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coordinates: { lat: "somewhere", lng: "somewhere" },
    keyWords: [1, 2, 3],
    tweetsCount: "not set",
  },
  mutations: {
    setCoordinates(state, coord) {
      state.coordinates = coord;
    },
    addKeyword(state, keyWord) {
      let a = new Set(state.keywords);
      let b = new Set(keyWord);
      let union = new Set([...a, ...b]);

      state.keyWords = [...union];
    },
    setKeywords(state, keywords) {
      state.keyWords = keywords;
    },
    deleteKeyword(state, keyWord) {
      console.log("store mutition");

      state.keyWords = state.keyWords.filter(function(item) {
        return item !== keyWord;
      });
    },
    setTweetsCount(state, count) {
      state.tweetsCount = count;
    },
  },
  actions: {
    SOCKET_tweetsCount({ commit }, server) {
      commit("setTweetsCount", server.tweetsCount);
      console.log(server);
    },

    setCoordinates({ commit }, coord) {
      commit("setCoordinates", coord);
    },
    addKeyword({ commit }, keyWord) {
      console.log("kkk", keyWord);
      var keywordsArray = [...new Set(keyWord.split(" "))];
      keywordsArray = keywordsArray.filter(function(item) {
        return item !== "";
      });

      commit("addKeyword", keywordsArray);
    },
    deleteKeyword({ commit }, keyWord) {
      console.log("store action");
      commit("deleteKeyword", keyWord);
    },
  },
  modules: {},
});

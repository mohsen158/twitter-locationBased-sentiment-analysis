import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coordinates: { lat: 38.90988670347028, lng: -77.03114827766372 },
    keyWords: ["trump", "good", "obama", "iran"],
    tweetsCount: "not set",
  },
  mutations: {
    setCoordinates(state, coord) {
      state.coordinates = coord;
    },
    addKeyword(state, keyWord) {
      state.keyWords = keyWord;
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
      var keywordsArray = [...new Set(keyWord.split(" "))];
      keywordsArray = keywordsArray.filter(function(item) {
        return item !== "";
      });
      let a = new Set(this.state.keyWords);
      let b = new Set(keywordsArray);
      let union = new Set([...a, ...b]);
      console.log("union", union);
      commit("addKeyword", union);
    },
    deleteKeyword({ commit }, keyWord) {
      console.log("store action");
      commit("deleteKeyword", keyWord);
    },
  },
  modules: {},
});

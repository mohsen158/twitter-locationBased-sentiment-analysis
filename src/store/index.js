import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clientId: "",
    coordinates: { lat: 38.90988670347028, lng: -77.03114827766372 },
    keyWords: ["trump", "good", "obama", "iran"],
    tweetsCount: "not set",
    firstLessTweetes: [],
    started: false,
    resaultArray: [],
  },
  mutations: {
    setCoordinates(state, coord) {
      state.coordinates = coord;
    },
    addKeyword(state, keyWord) {
      state.keyWords = keyWord;
    },
    setClientId(state, id) {
      state.clientId = id;
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
    addNewResault(state) {
      var obj = {
        keyWords: state.keyWords,
        location: state.coordinates,
        tweets: [],
        repetition: "",
        status: "Searching",
      };
      state.resaultArray.push(obj);
    },
    updateResault(state, server) {
      if (server.metaData.clientId == state.clientId) {
        state.resaultArray[server.metaData.resIndex].repetition =
          server.tweetsCount;
      }
    },
    doneSearch(state, server) {
      if (server.metaData.clientId == state.clientId) {
        state.resaultArray[server.metaData.resIndex].status = "Done";
      }
    },
    setTweetsCount(state, count) {
      state.tweetsCount = count;
    },
    setFirstLessTweetes(state, server) {
      if (state.clientId == server.metaData.clientId) {
        console.log("inja firstLessTweetes", server);
        console.log("firstlesstwwee2222222222", server.metadata);
        state.resaultArray[server.metaData.resIndex].tweets = server.tweets;
      }
      //state.firstLessTweetes = server.tweets;
    },
    setTweetsPannel(state, tweets) {
      state.firstLessTweetes = tweets;
    },
    setStart(state) {
      state.started = true;
    },
  },
  actions: {
    start({ commit }) {
      commit("setStart");
    },
    SOCKET_tweetsCount({ commit }, server) {
      commit("setTweetsCount", server.tweetsCount);

      console.log(server);
    },
    SOCKET_firstLessTweetes({ commit }, server) {
      console.log("SOCKET_firstLessTweetes", server);
      commit("setFirstLessTweetes", server);
    },
    setCoordinates({ commit }, coord) {
      commit("setCoordinates", coord);
    },
    addNewResault({ commit }) {
      commit("addNewResault");
    },
    SOCKET_updateResault({ commit }, server) {
      commit("updateResault", server);
    },
    SOCKET_doneSearch({ commit }, server) {
      commit("doneSearch", server);
    },
    setClientId({ commit }) {
      var id = Math.random()
        .toString(36)
        .substring(2, 15);
      commit("setClientId", id);
    },
    setTweetsPannel({ commit }, tweets) {
      commit("setTweetsPannel", tweets);
    },
    addKeyword({ commit }, keyWord) {
      var keywordsArray = [...new Set(keyWord.split(" "))];
      keywordsArray = keywordsArray.filter(function(item) {
        return item !== "";
      });
      let a = new Set(this.state.keyWords);
      let b = new Set(keywordsArray);
      let union = new Set([...a, ...b]);
      console.log("new union", [...union]);
      commit("addKeyword", [...union]);
    },
    deleteKeyword({ commit }, keyWord) {
      console.log("store action");
      commit("deleteKeyword", keyWord);
    },
  },
  modules: {},
});

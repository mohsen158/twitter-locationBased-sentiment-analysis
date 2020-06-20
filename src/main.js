import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import SuiVue from "semantic-ui-vue";

Vue.use(SuiVue);
Vue.config.productionTip = false;
import "semantic-ui-css/semantic.min.css";
import VueSocketIO from "vue-socket.io";

import VueMapbox from "vue-mapbox";
import Mapbox from "mapbox-gl";

Vue.use(VueAxios, axios);
Vue.use(VueMapbox, { mapboxgl: Mapbox });
// export const SocketInstance = socketio("http://localhost:3000");
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://localhost:3000",
    vuex: {
      store,
      actionPrefix: "SOCKET_",
    },
    options: {}, //Optional options
  })
);

// Vue.use(VueSocketIO, SocketInstance);
// Vue.use(
//   new VueSocketIO({
//     debug: true,
//     connection: "http://localhost:3000",
//     vuex: {
//       store,
//       options: {
//         useConnectionNamespace: true,
//       },
//     },
//     // options: { path: "/my-app/" }, //Optional options
//   })
// );
new Vue({
  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    customEmit: function(val) {
      console.log(
        val,
        'this method fired by socket server. eg: io.emit("customEmit", data)'
      );
    },
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import SuiVue from "semantic-ui-vue";

Vue.use(SuiVue);
Vue.config.productionTip = false;
import "semantic-ui-css/semantic.min.css";

import VueMapbox from "vue-mapbox";
import Mapbox from "mapbox-gl";

Vue.use(VueMapbox, { mapboxgl: Mapbox });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

<template>
  <div>
    <MglMap
      :accessToken="accessToken"
      :mapStyle.sync="mapStyle"
      :center="coordinates"
      :zoom="zoom"
    >
      <MglMarker
        :coordinates="coordinates"
        :zoom="zoom"
        color="blue"
        draggable="True"
        @drag="dragHandler"
      ></MglMarker>
    </MglMap>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker } from "vue-mapbox";
// import store from "../store";

export default {
  components: {
    MglMap,
    MglMarker,
  },
  methods: {
    dragHandler(data) {
      // this.$store.commit("setCoordinates", data.marker._lngLat);
      this.$store.dispatch("setCoordinates", data.marker._lngLat);
    },
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoibW9oc2VuMTU4IiwiYSI6ImNrYmttcm10MjEwc2MydHBqcjR4ZDBlaXgifQ.9ypToI2UslQRwrJvgq-2Lg", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mohsen158/ckbkn6im50wum1iqougfjgla3", // your map style
      coordinates: [-77.03114827766372, 38.90988670347028],
      zoom: 6,
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
};
</script>

<template>
  <MglMap
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
    :center="coordinates"
  >
    <MglMarker
      :coordinates="coordinates"
      color="blue"
      draggable="True"
      @drag="dragHandler"
    >
    </MglMarker>
  </MglMap>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglMarker,
  },
  methods: {
    dragHandler(data) {
      console.log(data.marker._lngLat);
      console.log("data");
    },
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoibW9oc2VuMTU4IiwiYSI6ImNrYmttcm10MjEwc2MydHBqcjR4ZDBlaXgifQ.9ypToI2UslQRwrJvgq-2Lg", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mohsen158/ckbkn6im50wum1iqougfjgla3", // your map style
      coordinates: [111.549668, 39.014],
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
};
</script>

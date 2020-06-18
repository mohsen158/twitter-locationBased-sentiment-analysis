<template>
  <sui-grid divided="vertically">
    <sui-grid-row :columns="2">
      <sui-grid-column>
        <sui-segment piled style="height: 400px">
          dfssdfsd
          <MapBox />sdfsd
        </sui-segment>
      </sui-grid-column>
      <sui-grid-column>
        <sui-segment piled>{{ $store.state.coordinates.lat }}</sui-segment>
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row :columns="3">
      <sui-grid-column>
        <sui-segment raised>
          <docs-wireframe name="paragraph" />
        </sui-segment>
      </sui-grid-column>
      <sui-grid-column>
        <sui-segment raised>
          <docs-wireframe name="paragraph" />
        </sui-segment>
      </sui-grid-column>
      <sui-grid-column>
        <sui-segment raised>
          <docs-wireframe name="paragraph" />
        </sui-segment>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import MapBox from "./MapBox";
// import store from "../store";
export default {
  name: "HelloWorld",
  components: {
    MapBox
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

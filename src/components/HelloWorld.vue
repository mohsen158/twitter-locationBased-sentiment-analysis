<template>
  <sui-grid divided="vertically">
    <sui-grid-row :columns="2">
      <sui-grid-column>
        <sui-segment piled style="height: 440px">
          <h2>set coordination</h2>
          <MapBox style="height:300px" />
          <div style="margin:10px">
            <sui-label>
              <sui-icon name="map marker" color="red" />longitude
              <sui-label-detail>
                {{
                $store.state.coordinates.lng
                }}
              </sui-label-detail>
            </sui-label>
            <sui-label>
              <sui-icon name="map marker" color="blue" />latitude
              <sui-label-detail>
                {{
                $store.state.coordinates.lat
                }}
              </sui-label-detail>
            </sui-label>
          </div>
        </sui-segment>
      </sui-grid-column>
      <sui-grid-column>
        <sui-segment piled>
          <AddKeywordsPanel />
        </sui-segment>
        <sui-segment raised>
          <KeywordsPanel />
        </sui-segment>
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
import AddKeywordsPanel from "./AddKeywordsPanel";
import KeywordsPanel from "./KeywordsPanel";
// import store from "../store";
export default {
  name: "HelloWorld",
  components: {
    AddKeywordsPanel,
    MapBox,
    KeywordsPanel
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

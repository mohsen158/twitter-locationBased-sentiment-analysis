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
              <sui-label-detail>{{
                $store.state.coordinates.lng
              }}</sui-label-detail>
            </sui-label>
            <sui-label>
              <sui-icon name="map marker" color="blue" />latitude
              <sui-label-detail>{{
                $store.state.coordinates.lat
              }}</sui-label-detail>
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
          <SearchReportPanel />
          <sui-button v-on:click="search" primary>Search</sui-button>
        </sui-segment>
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row :columns="3">
      <sui-grid-column>
        <sui-segment raised>
          fsdfsdfsfsdf
          <SearchReportPanel />
        </sui-segment>
      </sui-grid-column>
      <sui-grid-column>
        <sui-segment raised>
          <SearchReportPanel />
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
import SearchReportPanel from "./SearchReportPanel";
const axios = require("axios");
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

// var config = {
//   method: "post",
//   url: "http://localhost:3000/search",
//   headers: {},
// };

var Twitter = require("twitter");
var client = new Twitter({
  consumer_key: "XqA0sAFyM4j3MRtkW5p9UwANK",
  consumer_secret: "qxoCwOAfK6IzBWDCqsEgKiO9Kr74UaSCxPjhE2n5O5erInIbnb",
  bearer_token:
    "AAAAAAAAAAAAAAAAAAAAAP160AAAAAAAYfmkXUBpLjcdAl2eXQGO4x2gjaU%3D2WDiR5cOCHrr37qKgzMb71U9XRXukpLPJaCCEM3XdOPFnC1eCw",
});

// import store from "../store";
export default {
  name: "HelloWorld",
  components: {
    AddKeywordsPanel,
    MapBox,
    SearchReportPanel,
    KeywordsPanel,
  },

  props: {
    msg: String,
  },
  methods: {
    async myMethod() {
      const { data } = await this.$http.patch("http://localhost:3000/search", {
        name: "something",
      });
      console.log(data);
      // example response: { id: 1, name: "something" }
    },
    created: function() {
      this.$socket.subscribe("news", (data) => {
        console.log(data);
      });
      // `this` points to the vm instance
    },
    sockets: {
      connect() {
        // Fired when the socket connects.
        console.log("connectedddddd");
        this.isConnected = true;
      },

      disconnect() {
        this.isConnected = false;
      },
      // Fired when the server sends something on the "messageChannel" channel.
      messageChannel(data) {
        this.socketMessage = data;
      },
    },
    computed: {
      getKeyWords() {
        return this.$store.state.keyWords;
      },
    },
    search: function() {
      console.log(this.$socket);
      this.$socket.emit("testEvent", {
        keyWords: this.$store.state.keyWords,
        geoCode: this.$store.state.coordinates,
      });
      // axios(config)
      //   .then(function(response) {
      //     console.log(JSON.stringify(response.data));
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });

      // axios
      //   .post("localhost:3000/search", {
      //     firstName: "Fred",
      //     lastName: "Flintstone",
      //   })
      //   .then(function(response) {
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
      console.log("iam in searcsdddddh");

      //this.rF(1);
    },
    rF: function(maxid) {
      client.get(
        "search/tweets",
        { q: " trump good obama iran", count: 100, max_id: maxid },
        function(error, tweets, response) {
          console.log(response);
          if (error) {
            console.log(error);
            return;
          }
          var searchmetadata = tweets.search_metadata;
          var tweetsList = tweets.statuses;
          tweetsCount = tweetsCount + tweetsList.length;
          console.log(searchmetadata);
          if (tweetsList.length == 100) {
            this.rF(tweetsList[tweetsList.length - 1].id - 1);
            console.log(tweetsCount);
          } else {
            return;
          }
          console.log(145);
        }
      );
    },
  },
};

var tweetsCount = 0;
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

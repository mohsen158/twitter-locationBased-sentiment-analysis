<template>
  <sui-message visible>
    <h2 class="ui header left dividing aligned">Search resaults</h2>

    <!-- <p>You can always see me</p> -->
    <div>
      <sui-card
        v-for="res in getResaultsArray"
        :key="res"
        class="link"
        v-on:click="resClicked(res)"
      >
        <sui-card-content>
          <!-- <sui-card-header>Cute Dog</sui-card-header> -->

          <div v-for="val in res.keyWords" :key="val" style="float: left">
            <a style="margin-right:10px" is="sui-label">
              {{ val }}
              <!-- <sui-icon name="delete" v-on:click="deleteKeyWord(val)" /> -->
            </a>
          </div>

          <sui-card-meta style="margin-top:10px">
            <div style="margin:10px">
              <sui-label style="margin-top:10px">
                <sui-icon name="map marker" color="red" />longitude
                <sui-label-detail>
                  {{
                  res.location.lng
                  }}
                </sui-label-detail>
              </sui-label>
              <sui-label style="margin-top:10px">
                <sui-icon name="map marker" color="blue" />latitude
                <sui-label-detail>
                  {{
                  res.location.lat
                  }}
                </sui-label-detail>
              </sui-label>
            </div>
          </sui-card-meta>
          <!-- <sui-image src="/static/images/wireframes/paragraph.png" /> -->
        </sui-card-content>
        <sui-card-content extra>
          <span v-if="res.status=='Searching'">
            <sui-icon name="spinner" color="red" loading />Searching
          </span>

          <span v-else>
            <sui-icon name="check" color="green" />Done
          </span>
          <!-- <span>
              <sui-icon name="heart" />
              {{res.status}}
          </span>-->
          <span slot="right">
            <sui-icon color="black" name="chart bar" />
            {{res.repetition}}
          </span>
        </sui-card-content>
      </sui-card>
    </div>
  </sui-message>
</template>

<script>
export default {
  name: "SearchReportPanel",
  components: {},

  props: {
    msg: String
  },
  methods: {
    resClicked: function(res) {
      this.$store.dispatch("setTweetsPannel", res.tweets);
      console.log(res);
    }
  },

  computed: {
    getTweetsCount() {
      return this.$store.state.tweetsCount;
    },
    getResaultsArray() {
      return this.$store.state.resaultArray;
    }
  }
};
</script>

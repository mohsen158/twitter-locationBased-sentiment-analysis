<template>
  <sui-message visible>
    <h2 class="ui header left dividing aligned">
      Tweets
      <h4>Up to one hundered tweet</h4>
    </h2>
    <div v-for="val in getFirstLessTweetes" :key="val.id">
      <sui-card class="blue" style="margin-top:10px">
        <sui-card-content>
          <sui-card-header>
            <sui-icon name="twitter" color="blue" />
            {{val.user.name}}
          </sui-card-header>
          <sui-card-meta>{{val.text}}</sui-card-meta>
          <!-- <sui-image src="/static/images/wireframes/paragraph.png" /> -->
        </sui-card-content>
        <!-- <sui-card-content extra>
          <span slot="right">
            <sui-image src="/static/images/avatar/small/matt.jpg" shape="circular" size="mini" />Matt
          </span>
        </sui-card-content>-->
      </sui-card>
    </div>
  </sui-message>
</template>

<script>
// import store from "../store";
export default {
  name: "TweetesPanel",
  components: {},
  props: {
    msg: String,
    keyWordsArray: Array
  },
  computed: {
    getFirstLessTweetes() {
      return this.$store.state.firstLessTweetes;
    }
  },
  data: function() {
    return {
      keyWords: this.keyWordsArray
    };
  },
  methods: {
    deleteKeyWord: function(keyWord) {
      this.$store.dispatch("deleteKeyword", keyWord);
      console.log(keyWord);
    }
  }
};
</script>

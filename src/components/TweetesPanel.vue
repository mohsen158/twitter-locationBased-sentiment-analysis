<template>
  <div>
    <h2 class="ui header left dividing aligned">Tweetes</h2>
    <div v-for="val in getFirstLessTweetes" :key="val.id">
      <sui-segment vertical>
        {{ val.text }}
        <sui-divider />
      </sui-segment>
    </div>
  </div>
</template>

<script>
// import store from "../store";
export default {
  name: "TweetesPanel",
  components: {},
  props: {
    msg: String,
    keyWordsArray: Array,
  },
  computed: {
    getFirstLessTweetes() {
      return this.$store.state.firstLessTweetes;
    },
  },
  data: function() {
    return {
      keyWords: this.keyWordsArray,
    };
  },
  methods: {
    deleteKeyWord: function(keyWord) {
      this.$store.dispatch("deleteKeyword", keyWord);
      console.log(keyWord);
    },
  },
};
</script>

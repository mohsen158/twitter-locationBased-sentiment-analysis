<template>
  <div>
    keywords
    <div v-for="val in getFirstLessTweetes" :key="val.id">
      <a is="sui-label">
        <sui-segment vertical>
          {{ val.text }}
        </sui-segment>
      </a>
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

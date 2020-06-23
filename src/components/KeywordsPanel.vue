<template>
  <div>
    <h2 class="ui header left dividing aligned">Choosed keywords</h2>

    <div v-for="val in getKeyWords" :key="val" style="float:left; margin :10px;  ">
      <a is="sui-label">
        {{ val }}
        <sui-icon name="delete" v-on:click="deleteKeyWord(val)" />
      </a>
    </div>
  </div>
</template>

<script>
// import store from "../store";
export default {
  name: "KeywordsPanel",
  components: {},
  props: {
    msg: String,
    keyWordsArray: Array
  },
  computed: {
    getKeyWords() {
      return this.$store.state.keyWords;
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

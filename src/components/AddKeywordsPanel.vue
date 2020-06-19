<template>
  <sui-form @submit="addKeywords">
    <sui-form-field>
      <label>Add Keywords</label>
      <input v-model="keywordsInput" placeholder="Ex : Trump USA" />
    </sui-form-field>
    <sui-button v-on:click="addKeywords">Add</sui-button>
  </sui-form>
</template>

<script>
// import store from "../store";
export default {
  name: "AddKeywordsPanel",
  data: function() {
    return {
      keywordsInput: ""
    };
  },
  components: {},
  props: {
    msg: String
  },
  methods: {
    addKeywords: function(e) {
      this.$store.dispatch("addKeyword", this.keywordsInput);
      this.keywordsInput = "";
      e.preventDefault();
    }
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

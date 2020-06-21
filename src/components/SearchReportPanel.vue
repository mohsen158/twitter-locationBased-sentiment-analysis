<template>
  <div>
    <h2 class="ui header left dividing aligned">Number of repetitions</h2>

    <h1 class="ui header center aligned">
      {{ this.$store.state.tweetsCount }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "SearchReportPanel",
  components: {},

  props: {
    msg: String,
  },
  methods: {},

  computed: {
    getTweetsCount() {
      return this.$store.state.tweetsCount;
    },
  },
};
</script>

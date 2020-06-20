<template>
  <div>number of reapeted in twitters: {{ this.$store.state.tweetsCount }}</div>
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

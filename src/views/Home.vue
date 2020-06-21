<template>
  <sui-container class="cont">
    <div class="home">
      <sui-header size="huge" class="blue">
        <img src="../assets/logo.svg" class="ui image" />
        <div class="content">Twitter location based analysis<br /></div>
      </sui-header>
      <sui-segment color="blue">
        <h3>Search for your favorite topic in twitter</h3></sui-segment
      >

      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </sui-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style>
.cont {
  margin-top: 10%;
}
</style>

<template>
  <sui-container class="cont">
    <div class="home">
      <h2 class="ui blue header">
        <img src="../assets/logo.svg" class="ui image" />
        <div class="content">Twitter analysis platform</div>
      </h2>

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

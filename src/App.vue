<template>
  <!-- <nav>
    <img alt="Star Wars logo" src="./assets/SWlogo.png" />
    <div class="links">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'starships' }">Starships</router-link>
    </div>
  </nav> -->
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: { Navbar },
  // We call the action to populate the ship list
  created() {
    this.$store.dispatch("populateShipsList");
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>

<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapActions } from "vuex";

export default {
  components: { Navbar },

  methods: {
    ...mapActions(["fetchShips"]),
  },
  // We call the action to populate the ship list
  created() {
    this.fetchShips();
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

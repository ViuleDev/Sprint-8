<template>
  <div class="starships-container" v-if="$store.state.starShipsList.length">
    <div class="starships-card" v-for="ship in $store.state.starShipsList" :key="ship">
      <h3>{{ ship.name }}</h3>
      <p>{{ ship.model }}</p>
    </div>
  </div>

  <div v-else>
    <h2>Loading ships, thanks for your patience!</h2>
  </div>
</template>

<script>
export default {
  // We call the action to populate the ship list
  created() {
    this.$store.dispatch("populateShipsList");
  },
};
</script>

<style>
.starships-container {
  margin: 0 auto;
  max-width: 1000px;
}
.starships-card {
  text-align: left;
  margin: 2rem 0;
  padding: 1.5rem;
  background: #131515;
}

.starships-card h3,
.starships-card p {
  margin-bottom: 10px;
  color: #949e9e;
}
</style>

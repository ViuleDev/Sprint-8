<template>
  <div v-if="starship">
    <h1>{{ starship.name }}</h1>
    <div class="ship-card">
      <p>Model: {{ starship.model }}</p>
      <p>Cost in credits: {{ starship.cost_in_credits }}</p>
      <p>Atmospheric speed: {{ starship.max_atmosphering_speed }}</p>
      <p>Manufacturer: {{ starship.manufacturer }}</p>
      <p>Length: {{ starship.length }}</p>
      <p>Crew: {{ starship.crew }}</p>
    </div>
  </div>

  <div v-else>
    <h2>Loading ship details, thanks for your patience!</h2>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      starship: null,
    };
  },

  mounted() {
    // Fetch details of that particular ship
    fetch(this.id)
      .then((response) => response.json())
      .then((data) => {
        this.starship = data;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>

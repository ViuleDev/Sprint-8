<template>
  <div v-if="starship" class="starships-container">
    <h1>{{ starship.name.toUpperCase() }}</h1>
    <div class="ship-card">
      <p><span class="categories">Model: </span>{{ starship.model }}</p>
      <p><span class="categories">Cost in credits: </span>{{ Number(starship.cost_in_credits).toLocaleString() }} <b>₹</b></p>
      <p><span class="categories">Atmospheric speed: </span>{{ starship.max_atmosphering_speed }} <b>MGLT</b>/h</p>
      <p>
        <span class="categories">Manufacturer: </span><i> {{ starship.manufacturer }}</i>
      </p>
      <p><span class="categories">Length: </span>{{ starship.length }} <b>m</b></p>
      <p><span class="categories">Crew: </span>{{ starship.crew }} <fa class="fa-icon" :icon="['fas', 'fa-user-astronaut']" /></p>

      <div v-if="pilotsArray.length">
        <Pilots :pilots="pilotsArray" />
      </div>
    </div>
  </div>

  <div v-else>
    <h2>Loading ship details, thanks for your patience!</h2>
  </div>

  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Pilots from "@/components/Pilots.vue";
export default {
  components: { Footer, Pilots },
  props: ["id"],
  data() {
    return {
      starship: null,
      pilotsArray: null,
    };
  },
  mounted() {
    // Fetch details of that particular ship
    fetch(this.id)
      .then((response) => response.json())
      .then((data) => {
        this.starship = data;
        this.pilotsArray = data.pilots;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style>
.starships-container {
  max-width: 1200px;
  margin: 2rem auto;
  background: #131515;
  border-radius: 5px;
  padding: 1.5rem;
  text-align: left;
}

.starships-container h1 {
  border-bottom: 1px solid #844250;
  text-align: center;
  padding-bottom: 0.3rem;
}

.ship-card {
  margin: 1rem 0;
  font-size: 1.2rem;
}

.ship-card p {
  margin: 1rem 0;
}

.categories {
  color: white;
}
</style>

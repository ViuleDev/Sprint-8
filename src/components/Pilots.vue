<template>
  <div v-if="pilotsData.length">
    <h1>PILOTS</h1>
    <div v-if="pilotsData">
      <div v-for="pilot in pilotsData" :key="pilot.name">
        <p class="pilot-name">{{ pilot.name }}</p>
        <ul class="ul">
          <li><span class="text-red">Height: </span>{{ pilot.height }}cm</li>
          <li><span class="text-red">Weight: </span>{{ pilot.mass }}kg</li>
          <li><span class="text-red">Hair color: </span>{{ pilot.hair_color }}</li>
          <li><span class="text-red">Birth Year: </span>{{ pilot.birth_year }}</li>
          <li>
            <span class="text-red">Movies: </span>
            <Movies :moviesArray="pilot.films" />
          </li>
          <li>
            <span class="text-red">Starships: </span>
            <Starships :starshipsArray="pilot.starships" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Movies from "@/components/Movies.vue";
import Starships from "@/components/Starships.vue";

export default {
  components: { Movies, Starships },
  props: ["pilotsArray"],
  data() {
    return {
      pilotsData: [],
    };
  },

  mounted() {
    this.pilotsArray.forEach((pilotURL) => {
      fetch(pilotURL)
        .then((res) => res.json())
        .then((data) => {
          this.pilotsData.push(data);
          console.log(this.pilotsData);
        });
    });
  },
};
</script>

<style>
.pilot-name {
  color: white;
}

.ul {
  margin-left: 1rem;
}

.ul li {
  list-style: none;
  /* font-size: 0.9rem; */
}

.text-red {
  color: #844250;
}
</style>

<template>
  <Hero theme="rebel" />
  <div class="starships" v-if="starShipsList.length">
    <div class="starships-card" v-for="ship in starShipsList" :key="ship">
      <router-link :to="{ name: 'starshipCard', params: { id: ship.url } }">
        <h3>{{ ship.name }}</h3>
        <p>{{ ship.model }}</p>
      </router-link>
    </div>
  </div>
  <div v-else>
    <h2>Loading ships, thanks for your patience!</h2>
  </div>

  <Footer v-if="starShipsList.length === 36" />
</template>

<script>
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: { Hero, Footer },
  methods: {
    ...mapActions(["fetchMoreShips"]),

    moreShips() {
      window.onscroll = () => {
        // Check if the user has scrolled to the bottom of the window
        let bottomOfWindow = Math.trunc(document.documentElement.scrollTop + window.innerHeight) === document.documentElement.offsetHeight;

        // If it is true we make more API calls and concat the new arrays
        if (bottomOfWindow) {
          this.fetchMoreShips();
        }
      };
    },
  },

  computed: {
    ...mapState(["starShipsList"]),
  },

  mounted() {
    this.moreShips();
  },
};
</script>

<style>
.starships {
  margin: 0 auto;
  max-width: 1200px;
}
.starships-card {
  text-align: left;
  border-radius: 5px;
  margin: 2rem 0;
  padding: 1.5rem;
  background: #131515;
}

.starships-card h3,
.starships-card p {
  margin-bottom: 10px;
  color: #949e9e;
}
.starships-card p {
  font-size: 1.1rem;
}

router-link a {
  text-decoration: none;
}
</style>

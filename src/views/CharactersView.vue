<template>
  <Hero theme="characters" quote="“That’s how we’re gonna win. Not fighting what we hate, saving what we love.”" author="Rose, The Last Jedi" />
  <div class="starships" v-if="charactersList.length">
    <div class="starships-card" v-for="person in charactersList" :key="person">
      <h3>{{ person.name }}</h3>
      <p>
        <span class="text-red">Movies: </span>
        <Movies :moviesArray="person.films" />
      </p>
      <p>
        <span class="text-red">Starships: </span>
        <Starships :starshipsArray="person.starships" />
      </p>
    </div>
  </div>
  <div v-else>
    <h2>Loading characters, thanks for your patience!</h2>
  </div>

  <!-- <Footer v-if="charactersList.length === 82" /> -->
</template>

<script>
import Hero from "@/components/Hero.vue";
import Movies from "@/components/Movies.vue";
import Starships from "@/components/Starships.vue";
import Footer from "@/components/Footer.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: { Hero, Movies, Starships, Footer },
  methods: {
    ...mapActions(["fetchMoreCharacters"]),

    moreCharacters() {
      window.onscroll = () => {
        // Check if the user has scrolled to the bottom of the window
        let bottomOfWindow = Math.trunc(document.documentElement.scrollTop + window.innerHeight) === document.documentElement.offsetHeight;

        // If it is true we make more API calls and concat the new arrays
        if (bottomOfWindow) {
          this.fetchMoreCharacters();
        }
      };
    },
  },

  computed: {
    ...mapState(["charactersList"]),
  },

  mounted() {
    this.moreCharacters();
  },
};
</script>

<style>
.starships {
  margin: 0 auto;
  max-width: 1000px;
}
.starships-card {
  text-align: left;
  border-radius: 5px;
  margin: 2rem 0;
  padding: 1.5rem;
  background: #131515;
  border: 1px solid #844250;
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

<template>
  <span v-if="films.length">
    <span v-for="(movie, index) in films" :key="index"> {{ movie.title }} <b> | </b></span>
  </span>
</template>

<script>
export default {
  props: ["moviesArray"],

  data() {
    return {
      films: [],
    };
  },

  mounted() {
    this.moviesArray.forEach((movieURL) => {
      fetch(movieURL)
        .then((res) => res.json())
        .then((data) => {
          this.films.push(data);
          console.log(this.films);
        });
    });
  },
};
</script>

<style>
b {
  color: #844250;
}
</style>

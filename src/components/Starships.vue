<template>
  <span v-if="starships.length">
    <span v-for="(starship, index) in starships" :key="index"> {{ starship.name }} <b> | </b></span>
  </span>
</template>

<script>
export default {
  props: ["starshipsArray"],

  data() {
    return {
      starships: [],
    };
  },

  mounted() {
    this.starshipsArray.forEach((starshipURL) => {
      fetch(starshipURL)
        .then((res) => res.json())
        .then((data) => {
          this.starships.push(data);
          console.log(this.starships);
        });
    });
  },
};
</script>

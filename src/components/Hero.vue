<template>
  <div class="hero" :class="{ empire: theme === 'empire', rebel: theme === 'rebel' }">
    <div class="hero-header">
      <h1>“In a dark place we find ourselves and a little more knowledge lights our way.”</h1>
      <p>Yoda, Star Wars Episode III: Revenge Of The Sith</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
};
</script>

<style>
.hero {
  height: 50vh;
  display: flex;
  align-items: center;
  padding: 1.5rem;
}

.empire {
  background: url("../assets/bg1.jpg") center/cover;
}
.rebel {
  background: url("../assets/bg2.jpg") center/cover;
}

.hero-header h1 {
  max-width: 700px;
  text-align: left;
  color: white;
  font-size: 2.5rem;
  font-weight: 300;
}

.hero img {
  width: 80px;
}
</style>

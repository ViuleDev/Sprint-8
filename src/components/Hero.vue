<template>
  <div class="hero" :class="{ empire: theme === 'empire', rebel: theme === 'rebel', characters: theme === 'characters' }">
    <div class="hero-header">
      <h1>{{ quote }}</h1>
      <p>{{ author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme", "quote", "author"],
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
.characters {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url("../assets/bg2.jpg") center/cover;
}
.rebel {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url("../assets/bg3.jpg") center/cover;
}

.hero-header h1 {
  max-width: 700px;
  text-align: left;
  color: white;
  font-size: 2.5rem;
  font-weight: 300;
}

.hero-header p {
  text-align: left;
  color: #1267d5;
}

.hero img {
  width: 80px;
}
</style>

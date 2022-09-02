<template>
  <div class="game-cover">
    <h1 class="game-text">The quest of the Jedi begins.</h1>
    <button>JOIN THE FIGHT</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.game-cover {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("../assets/gamebg.jpg") center/cover;
  margin: 0 auto;
  max-width: 800px;
  min-height: 800px;
}

.game-cover h1 {
  padding-top: 10rem;
  color: white;
  font-weight: 400;
}

.game-cover button {
  border: none;
  outline: none;
  background: crimson;
  color: white;
  font-weight: 700;
  margin: 1rem 0;
  border-radius: 2px;
  padding: 0.5rem 0.8rem;
  cursor: crosshair;
}
</style>

<template>
  <div class="title">
    <h2>THE LATEST STAR WARS GAMES + APPS</h2>
  </div>
  <div class="game-cover">
    <h1 class="game-text">The quest of the Jedi begins.</h1>
    <button>JOIN THE FIGHT</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title h2 {
  margin: 2rem 0;
  font-weight: 500;
  color: #844250;
  padding: 1rem 0;
  border-bottom: 1px solid #949e9e;
  border-top: 1px solid #949e9e;
}

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

<template>
  <nav>
    <img alt="Star Wars logo" src="./assets/SWlogo.png" />
    <div class="links">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'starships' }">Starships</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav .links {
  display: flex;
  justify-content: center;
}

nav a {
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.5rem;
  color: white;
  display: block;
  margin: 20px 10px;
}

nav img {
  width: 200px;
  display: inline-block;
}

nav a.router-link-exact-active {
  color: #949e9e;
}
</style>

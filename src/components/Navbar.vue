<template>
  <div class="login-bar">
    <div class="fake-div" style="visibility: hidden">LOG IN // SIGN UP</div>
    <div class="logo">
      <img alt="Star Wars logo" src="../assets/SWlogo.png" />
    </div>

    <div class="login-links">
      <a href="#"> LOG IN </a>//
      <a href="#"> SIGN UP </a>
    </div>
  </div>
  <nav>
    <div class="links">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'starships' }">Starships</router-link>
    </div>
  </nav>
</template>

<style>
.login-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-links {
  margin-left: auto;
  margin-right: 50px;
}
.fake-div {
  margin-right: auto;
  margin-left: 50px;
}
nav {
  border-bottom: 1px solid #949e9e;
  border-top: 1px solid #949e9e;
}

nav .links {
  display: flex;
  justify-content: center;
}

nav a {
  border-right: 1px solid #949e9e;
  border-left: 1px solid #949e9e;
  padding: 5px 10px;
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.5rem;
  color: #949e9e;
}

.logo img {
  width: 200px;
  margin: 2rem 0;
}

nav a.router-link-exact-active {
  color: #f4f5f5;
  border-bottom: 2px solid #1267d5;
}
</style>

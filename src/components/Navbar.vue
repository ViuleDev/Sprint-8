<template>
  <div class="login-bar">
    <div class="fake-div" style="visibility: hidden">LOG IN // SIGN UP</div>
    <div class="logo">
      <img alt="Star Wars logo" src="../assets/SWlogo.png" />
    </div>

    <div class="login-links">
      <a href="#" @click="toggleModal"> LOG IN </a>//
      <a href="#" @click="toggleModal"> SIGN UP </a>
    </div>
  </div>
  <nav>
    <div class="links">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <div class="line"></div>
      <router-link :to="{ name: 'starships' }">Starships</router-link>
    </div>
  </nav>
  <div v-if="showModal">
    <LoginModal />
  </div>
</template>

<script>
import LoginModal from "@/components/LoginModal.vue";

import { mapState, mapMutations } from "vuex";

export default {
  components: { LoginModal },

  methods: {
    ...mapMutations(["toggleModal"]),
  },

  computed: {
    ...mapState(["showModal"]),
  },
};
</script>

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

nav .line {
  height: 100%;
  width: 10px;
  background: #1267d5;
}

nav a {
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
  color: #1267d5;
  font-weight: 600;
}
</style>

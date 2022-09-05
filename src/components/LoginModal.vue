<template>
  <div @click.self="toggleLoginModal" class="modal-wrapper">
    <div class="modal">
      <div class="modal-header">
        <img src="../assets/SWlogoYellow.png" alt="" />
      </div>

      <h2>ENTER YOUR PASSWORD</h2>

      <div class="form-container">
        <form class="form" @submit.prevent="">
          <input type="text" placeholder="Email Address" v-model="email" ref="email" />
          <button>Continue</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      email: "",
    };
  },

  methods: {
    ...mapMutations(["toggleLoginModal"]),
  },
};
</script>

<style></style>

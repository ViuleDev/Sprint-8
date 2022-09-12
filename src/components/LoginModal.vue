<template>
  <div @click.self="toggleLoginModal" class="modal-wrapper">
    <div class="modal">
      <div class="modal-header">
        <img src="../assets/SWlogoYellow.png" alt="" />
      </div>

      <h2>ENTER YOUR DETAILS</h2>

      <div class="form-container">
        <form class="form" @submit.prevent="validateInputs">
          <input type="text" placeholder="Email Address" v-model="email" ref="email" />
          <p class="error">{{ emailError }}</p>
          <input type="password" placeholder="Password" v-model="password" ref="password" />
          <p class="error">{{ passwordError }}</p>
          <button>Continue</button>
        </form>

        <a href="#" @click="toggleModals">No account yet? Signup here!</a>
      </div>

      <div class="close-modal" @click="toggleLoginModal">
        <fa class="fa-icon" :icon="['fa', 'fa-xmark']" />
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
      emailError: "",
      password: "",
      passwordError: "",
    };
  },

  methods: {
    ...mapMutations(["toggleLoginModal", "logIn", "toggleSignupModal"]),
    toggleModals() {
      this.toggleSignupModal();
      this.toggleLoginModal();
    },

    validateInputs() {
      // Email Validation
      let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/;
      let emailValidation = emailPattern.test(this.email);
      if (!emailValidation) {
        this.$refs.email.style.outline = "2px solid crimson";
        this.emailError = "Type a valid email address.";
      } else {
        this.$refs.email.style.outline = "2px solid #1267d5";
        this.emailError = "";
      }

      // Password Validation
      /*
      - at least 8 characters
      - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
      - Can contain special characters
      */
      let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$/gm;
      let passwordValidation = passwordPattern.test(this.password);
      if (!passwordValidation) {
        this.$refs.password.style.outline = "2px solid crimson";
        this.passwordError = "Invalid password.";
      } else {
        this.$refs.password.style.outline = "2px solid #1267d5";
        this.passwordError = "";
      }

      if (emailValidation && passwordValidation) {
        this.logIn({ email: this.email.toLowerCase(), password: this.password });
      }
    },
  },
};
</script>

<style></style>

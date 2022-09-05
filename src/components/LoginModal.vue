<template>
  <div @click.self="toggleLoginModal" class="modal-wrapper">
    <div class="modal">
      <div class="modal-header">
        <img src="../assets/SWlogoYellow.png" alt="" />
      </div>

      <h2>ENTER YOUR PASSWORD</h2>

      <div class="form-container">
        <form class="form" @submit.prevent="validateInputs">
          <input type="text" placeholder="Email Address" v-model="email" ref="email" />
          <input type="text" placeholder="Password" v-model="password" ref="password" />
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
      password: "",
    };
  },

  methods: {
    ...mapMutations(["toggleLoginModal"]),

    validateInputs() {
      // Email Validation
      let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/;
      let emailValidation = emailPattern.test(this.email);
      if (!emailValidation) {
        this.$refs.email.style.outline = "2px solid crimson";
      } else {
        this.$refs.email.style.outline = "2px solid #1267d5";
      }

      // Password Validation
      /*
      - at least 8 characters
      - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
      - Can contain special characters
      */
      let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
      let passwordValidation = passwordPattern.test(this.password);
      if (!passwordValidation) {
        this.$refs.password.style.outline = "2px solid crimson";
      } else {
        this.$refs.password.style.outline = "2px solid #1267d5";
      }

      if(emailValidation && passwordValidation){
        
      }
    },
  },
};
</script>

<style></style>

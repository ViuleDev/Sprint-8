<template>
  <div @click.self="toggleSignupModal" class="modal-wrapper">
    <div class="modal">
      <div class="modal-header">
        <img src="../assets/SWlogoYellow.png" alt="" />
      </div>

      <h2>CREATE YOUR ACCOUNT</h2>

      <div class="form-container">
        <form class="form" @submit.prevent="validateForm">
          <input type="text" placeholder="First Name" v-model="fName" ref="name" />
          <p class="error">{{ fNameError }}</p>
          <input type="text" placeholder="Last Name" v-model="lName" ref="lastName" />
          <p class="error">{{ lNameError }}</p>
          <input type="text" placeholder="Email Address" v-model="email" ref="email" />
          <p class="error">{{ emailError }}</p>
          <input type="password" placeholder="Password" v-model="password" ref="password" />
          <p class="error">{{ passwordError }}</p>

          <div class="terms">
            <input type="checkbox" v-model="terms" ref="terms" />
            <label for="">Yes! I would like to receive by email special offers and updates about Lucasfilm Ltd.</label>
          </div>

          <button>Create Account</button>
        </form>
      </div>

      <div class="close-modal" @click="toggleSignupModal">
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
      fName: "",
      fNameError: "",
      lName: "",
      lNameError: "",
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      terms: false,
    };
  },

  methods: {
    ...mapMutations(["toggleSignupModal", "addUser"]),

    validateForm() {
      // Name Validation
      let namePattern = /^[a-z ,.'-]+$/i;
      let nameValidation = namePattern.test(this.fName);
      if (!nameValidation) {
        this.$refs.name.style.outline = "2px solid crimson";
        this.fNameError = "Type your first name.";
      } else {
        this.$refs.name.style.outline = "2px solid #1267d5";
        this.fNameError = "";
      }

      // Last Name Validation
      let lNameValidation = namePattern.test(this.lName);
      if (!lNameValidation) {
        this.$refs.lastName.style.outline = "2px solid crimson";
        this.lNameError = "Type your last name.";
      } else {
        this.$refs.lastName.style.outline = "2px solid #1267d5";
        this.lNameError = "";
      }

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
        this.passwordError = "Password must be at least 4 characters, 1 uppercase letter, 1 lowercase letter, and 1 number.";
      } else {
        this.$refs.password.style.outline = "2px solid #1267d5";
        this.passwordError = "";
      }

      if (!this.terms) {
        this.$refs.terms.style.outline = "2px solid crimson";
      } else {
        this.$refs.terms.style.outline = "2px solid #1267d5";
      }

      // If all the Inputs are valid we create the user by calling the mutation in the Vuex store.

      if (nameValidation && lNameValidation && emailValidation && passwordValidation && this.terms) {
        this.addUser({ firstName: this.fName, lastName: this.lName, email: this.email.toLowerCase(), password: this.password });
        this.fName = "";
        this.lName = "";
        this.email = "";
        this.password = "";
        this.terms = false;
      }
    },
  },
};
</script>

<style>
.modal-wrapper {
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 500px;
  background: #131515;
  padding: 2rem;
  position: relative;
}

.modal h2 {
  margin-bottom: 1rem;
  color: #ffeb00;
  font-weight: 300;
}

.modal-header img {
  width: 100px;
}

.form-container {
  text-align: left;
  width: 300px;
  margin: 2rem auto;
}

.form input[type="text"],
.form input[type="password"] {
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin: 1rem auto;
  width: 300px;
  color: #131515;
  display: block;
}

.form input[type="checkbox"] {
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.form input:focus-visible {
  outline: 2px solid #ffeb00;
  background: #949e9e;
  color: white;
}

.form button {
  margin: 2rem auto;
  width: 300px;
  display: block;
  border: none;
  outline: none;
  background: crimson;
  color: white;
  font-weight: 500;
  border-radius: 2px;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
}

.close-modal {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.close-modal .fa-icon {
  font-size: 1.5rem;
}

.terms label {
  color: #aaa;
  font-size: 0.8em;
  letter-spacing: 1px;
}
</style>

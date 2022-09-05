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
          <input type="text" placeholder="Last Name" v-model="lName" ref="lastName" />
          <input type="text" placeholder="Email Address" v-model="email" ref="email" />
          <input type="text" placeholder="Password" v-model="password" ref="password" />

          <div class="terms">
            <input type="checkbox" v-model="terms" ref="terms" />
            <label for="">Yes! I would like to receive by email special offers and updates about Lucasfilm Ltd.</label>
          </div>

          <button>Create Account</button>
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
      fName: "",
      lName: "",
      email: "",
      password: "",
      terms: false,
    };
  },

  methods: {
    ...mapMutations(["toggleSignupModal", "addUser"]),

    validateForm() {
      // Name Validation
      let namePattern = /^[A-Za-z]+$/;
      let nameValidation = namePattern.test(this.fName);
      if (!nameValidation) {
        this.$refs.name.style.outline = "2px solid crimson";
      } else {
        this.$refs.name.style.outline = "2px solid #1267d5";
      }

      // Last Name Validation
      let lNameValidation = namePattern.test(this.lName);
      if (!lNameValidation) {
        this.$refs.lastName.style.outline = "2px solid crimson";
      } else {
        this.$refs.lastName.style.outline = "2px solid #1267d5";
      }

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

      if (!this.terms) {
        this.$refs.terms.style.outline = "2px solid crimson";
      } else {
        this.$refs.terms.style.outline = "2px solid #1267d5";
      }

      // If all the Inputs are valid we create the user by calling the mutation in the Vuex store.

      if (nameValidation && lNameValidation && emailValidation && passwordValidation && this.terms) {
        this.addUser({ firstName: this.fName, lastName: this.lName, email: this.email, password: this.password });
        this.fName = "";
        this.lName = "";
        this.email = "";
        this.password = "";
        this.terms = false;
      } else {
        alert("There is some problem");
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
  min-width: 500px;
  background: #131515;
  padding: 2rem;
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

.form input[type="text"] {
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin: 2rem auto;
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
  margin: 1rem auto;
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

.terms label {
  color: #aaa;
  font-size: 0.8em;
  letter-spacing: 1px;
}
</style>
<template>
  <div @click.self="toggleModal" class="modal-wrapper">
    <div class="modal">
      <div class="modal-header">
        <img src="../assets/SWlogoYellow.png" alt="" />
      </div>

      <h2>CREATE YOUR ACCOUNT</h2>

      <div>
        <form class="form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["toggleModal"]),
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
  padding: 1.5rem;
}

.modal h2 {
  margin-bottom: 1rem;
  color: #ffeb00;
  font-weight: 300;
}

.modal-header img {
  width: 100px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form input {
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 2rem;
  width: 300px;
}
</style>

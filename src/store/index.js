import { createStore } from "vuex";
import axios from "axios";

const starshipsURL = "https://swapi.dev/api/starships/?page=";

export default createStore({
  state: {
    starShipsList: [],
    pageList: 1,
    showSignupModal: false,
    showLoginModal: false,
    registeredUsers: [],
  },
  getters: {},
  mutations: {
    // Populate starShipsList for the first time
    populateShipsList(state, shipList) {
      state.starShipsList = shipList;
    },

    // Add more ships
    addMoreShips(state, moreShips) {
      if (state.starShipsList.length < 36) {
        state.starShipsList = state.starShipsList.concat(moreShips);
      }
      // console.log(state.starShipsList.length);
    },

    // Toggle Signup Modal
    toggleSignupModal(state) {
      state.showSignupModal = !state.showSignupModal;
    },
    // Toggle Login Modal
    toggleLoginModal(state) {
      state.showLoginModal = !state.showLoginModal;
    },

    // Create New User
    addUser(state, payload) {
      console.log(payload.email);

      // Check to see if the user is already in our database
      if (state.registeredUsers.length === 0) {
        state.registeredUsers.push(payload);
      } else {
        // Create an array with only the emails from the registered users
        // If the email passed with the payload is not present it means that we can create a new user
        const emailOnly = state.registeredUsers.map((user) => user.email.toUpperCase());
        if (!emailOnly.includes(payload.email.toUpperCase())) {
          state.registeredUsers.push(payload);
        }
        console.log(emailOnly);
      }

      console.log(state.registeredUsers);
    },

    // Check for Existing User by matching Email Address
  },
  actions: {
    // Api call using the created() life cycle hook in App.vue
    async fetchShips({ commit }) {
      try {
        const response = await axios.get(starshipsURL + this.state.pageList);
        const data = await response.data.results;
        console.log({ data });

        // Sending the data to the mutations with a commit
        commit("populateShipsList", data);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchMoreShips({ commit }) {
      if (this.state.pageList < 4) {
        this.state.pageList++;
        console.log(this.state.pageList);
      }
      try {
        const response = await axios.get(starshipsURL + this.state.pageList);
        const data = await response.data.results;

        // Sending the data to the mutations with a commit
        commit("addMoreShips", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});

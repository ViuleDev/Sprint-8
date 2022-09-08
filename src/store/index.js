import { createStore } from "vuex";
import axios from "axios";
import router from "../router/index";

const starshipsURL = "https://swapi.dev/api/starships/?page=";

export default createStore({
  state: {
    starShipsList: [],
    pageList: 1,
    showSignupModal: false,
    showLoginModal: false,
    registeredUsers: [],
    loggedIn: false,
    currentUser: "",
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
      // Check to see if the user is already in our database
      if (state.registeredUsers.length === 0) {
        state.registeredUsers.push(payload);
        state.showSignupModal = false;
        console.log("User Registered succesfully");
      } else {
        // Create an array with only the emails from the registered users
        // If the email passed with the payload is not present it means that we can create a new user
        const emailOnly = state.registeredUsers.map((user) => user.email.toUpperCase());
        if (!emailOnly.includes(payload.email.toUpperCase())) {
          state.registeredUsers.push(payload);
          state.showSignupModal = false;
          console.log("User Registered succesfully");
        } else {
          console.log("User already registered");
        }
      }

      console.table(state.registeredUsers);
    },

    // Check for Existing User by matching Email & Password

    grantAccess(state, payload) {
      let isLoggedIn = false;

      // We only do this check if there are already registered users.
      if (state.registeredUsers.length) {
        state.registeredUsers.some((user) => {
          if (user.email === payload.email && user.password === payload.password) {
            return (isLoggedIn = true);
          } else {
            isLoggedIn = false;
          }
        });

        if (isLoggedIn) {
          console.log("payload email is", payload.email);
          state.currentUser = payload.email;
          state.loggedIn = true;
          state.showLoginModal = false;
          console.log("Succesfully logged in!");
        } else {
          state.loggedIn = false;
          console.log("Invalid username or password!");
        }
      } else {
        state.loggedIn = false;
        alert("No user registered yet!");
      }
    },

    logOut(state) {
      state.loggedIn = false;
      state.currentUser = "";

      // Redirects to the Home page when we log out
      router.push({ name: "home" });

      console.log("Logged out!");
    },
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

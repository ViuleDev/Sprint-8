import { createStore } from "vuex";
import axios from "axios";
import router from "../router/index";

const starshipsURL = "https://swapi.dev/api/starships/?page=";
const charactersURL = "https://swapi.dev/api/people/?page=";

export default createStore({
  state: {
    starShipsList: [],
    starshipsPage: 1,

    charactersList: [],
    charactersPage: 1,

    showSignupModal: false,
    showLoginModal: false,

    registeredUsers: [],
    loggedIn: false,
    currentUser: "",

    starship: null,
    pilotsArray: null,
  },

  getters: {},

  mutations: {
    // Populate starShipsList for the first time
    fetchShips(state, shipsData) {
      state.starShipsList = shipsData;
    },

    // Add more ships
    fetchMoreShips(state, moreShips) {
      if (state.starShipsList.length < moreShips.count) {
        state.starShipsList = state.starShipsList.concat(moreShips.results);
      }
      console.log(state.starShipsList);
      // console.log(state.starShipsList.length);
    },

    // Populate charactersList for the first time
    fetchCharacters(state, charData) {
      state.charactersList = charData;
    },

    // Add more characters
    fetchMoreCharacters(state, moreCharacters) {
      if (state.charactersList.length < moreCharacters.count) {
        state.charactersList = state.charactersList.concat(moreCharacters.results);
      }
      console.log(state.charactersList);
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

    fetchStarship(state, starshipData) {
      state.starship = starshipData;
    },

    turnStarshipPage(state) {
      if (state.starshipsPage < 5) {
        state.starshipsPage++;
      }
    },
    turnCharactersPage(state) {
      if (state.charactersPage < 10) {
        state.charactersPage++;
      }
    },

    setPilots(state, pilotsData) {
      state.pilotsArray = pilotsData;
    },

    clearPilots(state) {
      state.pilotsArray = [];
    },

    // Create New User
    addUser(state, userData) {
      // Check to see if the user is already in our database
      if (state.registeredUsers.length === 0) {
        state.registeredUsers.push(userData);
        state.showSignupModal = false;
        console.log("User Registered succesfully");
      } else {
        // Create an array with only the emails from the registered users
        // If the email passed with the userData is not present it means that we can create a new user
        const emailOnly = state.registeredUsers.map((user) => user.email.toUpperCase());
        if (!emailOnly.includes(userData.email.toUpperCase())) {
          state.registeredUsers.push(userData);
          state.showSignupModal = false;
          console.log("User Registered succesfully");
        } else {
          console.log("User already registered");
        }
      }

      console.table(state.registeredUsers);
    },

    // Check for Existing User by matching Email & Password
    logIn(state, userData) {
      let isLoggedIn = false;

      // We only do this check if there are already registered users.
      if (state.registeredUsers.length) {
        state.registeredUsers.some((user) => {
          if (user.email === userData.email && user.password === userData.password) {
            return (isLoggedIn = true);
          } else {
            isLoggedIn = false;
          }
        });

        if (isLoggedIn) {
          console.log("userData email is", userData.email);
          state.currentUser = userData.email;
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
      const response = await axios.get(starshipsURL + 1);
      const data = await response.data.results;
      console.log({ data });

      // Sending the data to the mutations with a commit
      commit("fetchShips", data);
    },

    async fetchMoreShips({ commit }) {
      commit("turnStarshipPage");
      if (this.state.starshipsPage > 4) {
        return;
      } else {
        const response = await axios.get(starshipsURL + this.state.starshipsPage);
        const data = await response.data;

        // Sending the data to the mutations with a commit
        commit("fetchMoreShips", data);
      }
    },

    async fetchStarshipData({ commit }, URL) {
      try {
        const response = await axios.get(URL);
        const starshipData = await response.data;

        commit("fetchStarship", starshipData);
        commit("setPilots", starshipData.pilots);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchCharacters({ commit }) {
      const response = await axios.get(charactersURL + 1);
      const data = await response.data.results;
      console.log({ data });

      // Sending the data to the mutations with a commit
      commit("fetchCharacters", data);
    },

    async fetchMoreCharacters({ commit }) {
      commit("turnCharactersPage");
      if (this.state.charactersPage > 9) {
        return;
      } else {
        const response = await axios.get(charactersURL + this.state.charactersPage);
        const data = await response.data;

        // Sending the data to the mutations with a commit
        commit("fetchMoreCharacters", data);
      }
    },
  },
});

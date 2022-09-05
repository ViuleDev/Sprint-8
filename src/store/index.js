import { createStore } from "vuex";
import axios from "axios";

const starshipsURL = "https://swapi.dev/api/starships/?page=";

export default createStore({
  state: {
    starShipsList: [],
    pageList: 1,
    showSignupModal: false,
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

    // Create User
    addUser(state, payload) {
      state.registeredUsers.push(payload);
      console.log(state.registeredUsers);
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

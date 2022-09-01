import { createStore } from "vuex";
import axios from "axios";

const starshipsURL = "https://swapi.dev/api/starships/?page=1";

export default createStore({
  state: {
    starShipsList: [],
    pageList: 1,
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

      console.log(state.starShipsList.length);
    },
  },
  actions: {
    // Api call using the created() life cycle hook in App.vue
    async populateShipsList({ commit }) {
      try {
        const response = await axios.get("https://swapi.dev/api/starships/?page=" + this.state.pageList);
        const data = await response.data.results;
        console.log({ data });

        // Sending the data to the mutations with a commit
        commit("populateShipsList", data);
      } catch (error) {
        console.log(error);
      }
    },

    async addMoreShips({ commit }) {
      if (this.state.pageList < 4) {
        this.state.pageList++;
        console.log(this.state.pageList);
      }
      try {
        const response = await axios.get("https://swapi.dev/api/starships/?page=" + this.state.pageList);
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

import { createStore } from "vuex";
import axios from "axios";

const starshipsURL = "https://swapi.dev/api/starships/?page=1";

export default createStore({
  state: {
    starShipsList: [],
  },
  getters: {},
  mutations: {
    populateShipsList(state, shipList) {
      state.starShipsList = shipList;
    },
  },
  actions: {
    // Api call using the created() life cycle hook in StarshipsView.vue
    async populateShipsList({ commit }) {
      try {
        const response = await axios.get(starshipsURL);
        const data = await response.data.results;
        console.log({ data });

        // Sending the data to the mutations with a commit
        commit("populateShipsList", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});

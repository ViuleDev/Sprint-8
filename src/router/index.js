import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StarshipsView from "../views/StarshipsView.vue";
import StarshipCardView from "../views/StarshipCardView.vue";
import CharactersView from "../views/CharactersView.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/starships",
    name: "starships",
    component: StarshipsView,
    // beforeEnter: (to, from, next) => {
    //   if (store.state.loggedIn === false) {
    //     next(false);
    //     store.commit("toggleLoginModal");
    //   } else {
    //     next();
    //   }
    // },
  },
  {
    path: "/characters",
    name: "characters",
    component: CharactersView,
    // beforeEnter: (to, from, next) => {
    //   if (store.state.loggedIn === false) {
    //     next(false);
    //     store.commit("toggleLoginModal");
    //   } else {
    //     next();
    //   }
    // },
  },
  {
    path: "/starships/:id",
    name: "starshipCard",
    component: StarshipCardView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

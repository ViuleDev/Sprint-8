import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StarshipsView from "../views/StarshipsView.vue";
import StarshipCardView from "../views/StarshipCardView.vue";

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
  },
  {
    path: "/starships/:id",
    name: "starshipCard",
    component: StarshipCardView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StarshipsView from "../views/StarshipsView.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

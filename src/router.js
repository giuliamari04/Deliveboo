import { createRouter, createWebHistory } from "vue-router";
import AppHomepage from "./pages/AppHomepage.vue";
import AppRestaurants from "./pages/AppRestaurants.vue";
import SingleRestaurant from "./pages/SingleRestaurant.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHomepage,
    },
    {
      path: "/restaurants",
      name: "restaurants",
      component: AppRestaurants,
    },
    {
      path: "/single-restaurant:slug",
      name: "single-restaurant",
      component: SingleRestaurant,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },

    

  ],
});

export default router;

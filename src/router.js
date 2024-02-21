import { createRouter, createWebHistory } from "vue-router";
import AppHomepage from "./pages/AppHomepage.vue";
import AppRestaurants from "./pages/AppRestaurants.vue";
import SingleRestaurant from "./pages/SingleRestaurant.vue";
import AppCheckOut from "./pages/AppCheckOut.vue";
import ThankYou from "./pages/ThankYou.vue";
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
      path: "/restaurants/:slug",
      name: "single-restaurant",
      component: SingleRestaurant,
    },
    {
      path: "/checkout",
      name: "check-out",
      component: AppCheckOut,
    },
    {
      path: "/thank-you",
      name: "thank-you",
      component: ThankYou,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;

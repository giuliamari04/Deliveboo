import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppPosts from "./pages/AppPosts.vue";
import SinglePost from "./pages/SinglePost.vue";
import AppContact from "./pages/AppContact.vue";
import NotFound from "./components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/posts",
      name: "posts",
      component: AppPosts,
    },
    {
      path: "/posts/:slug",
      name: "single-post",
      component: SinglePost,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: AppContact,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    } //rotta di fallback nel caso non vada in nessuna delle precedenti

  ],
});

export default router;

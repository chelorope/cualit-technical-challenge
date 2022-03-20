import { createRouter, createWebHistory } from "vue-router";
import TutorialsView from "../views/ListTutorialsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: { name: "tutorials" },
    },
    {
      path: "/tutoriales",
      name: "tutorials",
      component: TutorialsView,
    },
    {
      path: "/tutoriales/:id",
      name: "tutorial",
      component: () => import("../views/TutorialView.vue"),
    },
    {
      path: "/tutoriales/crear",
      name: "create",
      component: () => import("../views/CreateTutorialView.vue"),
    },
  ],
});

export default router;

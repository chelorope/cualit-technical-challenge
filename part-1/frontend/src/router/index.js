import { createRouter, createWebHistory } from "vue-router";
import ListTutorialsView from "../views/ListTutorialsView.vue";
import {
  TUTORIALS_PATH,
  GET_TUTORIALS_EDIT_FULL_PATH,
  TUTORIALS_CREATE_FULL_PATH,
} from "./paths";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: { name: "tutorials" },
    },
    {
      path: TUTORIALS_PATH,
      name: "tutorials",
      component: ListTutorialsView,
      children: [
        {
          path: ":id",
          name: "tutorial",
          component: () => import("../views/TutorialView.vue"),
        },
      ],
    },
    {
      path: GET_TUTORIALS_EDIT_FULL_PATH(":id"),
      name: "edit",
      component: () => import("../views/EditTutorialView.vue"),
    },
    {
      path: TUTORIALS_CREATE_FULL_PATH,
      name: "create",
      component: () => import("../views/CreateTutorialView.vue"),
    },
  ],
});

export default router;

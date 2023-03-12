import { createRouter, createWebHistory } from "vue-router";
import Repositories from "./components/Repositories.vue";
import Repository from "./components/Repository.vue";
import NotFound404 from "./components/NotFound404.vue";

const routes = [
  {
    path: "/",
    name: "Repositories",
    component: Repositories,
  },
  {
    path: "/repository/:name",
    name: "Repository",
    component: Repository,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound404",
    component: NotFound404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";
import TestView from "../views/TestView.vue";
import HomeView from "../views/HomeView.vue";
import CommitsView from "../views/CommitsView.vue";

const routes = [
  { path: "/", component: TestView },
  // { path: "/", component: HomeView },
  { path: "/commits", component: CommitsView },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

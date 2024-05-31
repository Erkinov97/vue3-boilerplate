import { RouteRecordRaw } from "vue-router";
import { perRouteMiddleware } from "./middleware";

// pages
import HomeView from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: { requiresAuth: false },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: { requiresAuth: false },
    beforeEnter: perRouteMiddleware,
  },
];

export default routes;

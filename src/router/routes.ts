import type { RouteRecordRaw } from "vue-router";
import { perRouteMiddleware } from "./guard";

// pages
import NotFound from "@/views/NotFound.vue";
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";

const routes: RouteRecordRaw[] = [
  ...publicRoutes,
  ...privateRoutes,
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: { requiresAuth: false },
    beforeEnter: perRouteMiddleware,
  },
];

export default routes;

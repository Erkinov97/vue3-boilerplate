import HomeView from "@/views/Home.vue";
import type { RouteRecordRaw } from "vue-router";

export const privateRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: { requiresAuth: false },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue"),
    meta: { requiresAuth: true },
  },
];

import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { globalMiddleware } from "./guard";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(globalMiddleware);

export default router;

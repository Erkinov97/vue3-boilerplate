import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { globalMiddleware } from "./middleware";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(globalMiddleware);

export default router;

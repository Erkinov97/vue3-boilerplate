import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export default function globalMiddleware(
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  console.log("Global middleware");
  next();
}

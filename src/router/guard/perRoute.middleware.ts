import { NavigationGuardNext } from "vue-router";
import { RouteLocationNormalized } from "vue-router";
export default function perRouteMiddleware(
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  console.log("Per route middleware");
  next();
}

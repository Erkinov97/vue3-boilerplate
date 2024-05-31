import { RouteLocationNormalized } from "vue-router";
export default function componentMiddleware(
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized
) {
  console.log("Component middleware");
}

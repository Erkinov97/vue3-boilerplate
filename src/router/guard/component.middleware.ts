import { RouteLocationNormalized } from "vue-router";
export default function componentMiddleware(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) {
  console.log("Component middleware=>", { to, from });
}

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Template/Base/Home.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Template/Base/Index"),
    meta: {
      layout: "CleanLayout", // same here
    },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Account/Login"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Account/Register"),
  },
  {
    path: "/reset",
    name: "ResetPass",
    component: () => import("../views/Account/ResetPassword"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Account/Profile"),
  },
  {
    path: "/build",
    name: "Build",
    component: () => import("../views/Template/Pages/Build"),
  },
  {
    path: "/page/:slug",
    name: "Category",
    component: () => import("../views/Template/Pages/Category"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  // linkExactActiveClass: "exact-active",
});

export default router;

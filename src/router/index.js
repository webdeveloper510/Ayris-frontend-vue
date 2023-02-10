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
    path: "/mythology",
    name: "Mythology",
    component: () => import("../views/Template/Pages/Mythology"),
  },
  {
    path: "/page/:slug",
    name: "Category",
    component: () => import("../views/Template/Pages/Category"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Template/Pages/Search"),
  },
  {
    path: "/manifesto",
    name: "Manifesto",
    component: () => import("../views/Template/Pages/Manifesto"),
  },
  {
    path: "/editcategory",
    name: "EditCategory",
    component: () => import("../views/Template/Pages/EditCategory"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  // linkExactActiveClass: "exact-active",
});

export default router;

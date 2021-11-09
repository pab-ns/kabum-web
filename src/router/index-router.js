import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/categorias",
    name: "Categorias",
    component: () => import("../views/Categorias.vue"),
  },

  {
    path: "/categorias/:id",
    name: "Categorias",
    component: () => import("../views/GamesCategories.vue"),
  },

  {
    path: "/buscador",
    name: "Buscador",
    component: () => import("../views/Buscador.vue"),
  },
  {
    path: "/buscador",
    name: "Buscador",
    component: () => import("../views/Buscador.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
  },
  {
    path: "/admin/:id",
    name: "Edit",
    component: () => import("../views/EditGame.vue"),
  },
  {
    path: "/juegos",
    name: "Juegos",
    component: () => import("../views/juegos.vue"),
  },
  {
    path: "/juegos/:id",
    name: "Detallejuego",
    component: () => import("../views/detallejuego.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;

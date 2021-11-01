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
    path: "/buscador",
    name: "Buscador",
    component: () => import("../views/Buscador.vue"),
  },
  {
    path: "/juegos",
    name: "juegos",
    component: () => import("../views/juegos.vue"),
  },
  {
    path: "/juego",
    name: "Juego",
    component: () => import("../views/juego.vue"),
  },
  {
    path: "/juegos/:id",
    name: "detallejuego",
    component: () => import("../views/detallejuego.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

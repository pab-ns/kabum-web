import Vue from "vue";
import VueRouter from "vue-router";
/* import Store from "../store/sessionModule"; */

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/'
  },

  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/categorias",
    name: "Categorias",
    component: () => import("../views/Categories.vue"),
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/categorias/:id",
    name: "Categorias",
    component: () => import("../views/GamesCategories.vue"),
  },
  {
    path: "/admin",
    name: "Administrador",
    component: () => import("../views/Admin.vue"),
  },
  {
    path: "/admin/:id",
    name: "Edit",
    component: () => import("../views/EditGame.vue"),
  },
  {
    path: "/buscador",
    name: "Buscador",
    component: () => import("../views/SearchGames.vue"),
  },
  {
    path: "/juegos/:id",
    name: "Detallejuego",
    component: () => import("../views/GameDetails.vue"),
  },
  {
    path: "/favoritos",
    name: "Favoritos",
    component: () => import("../views/Favorites.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

/* router.beforeEach((to, from, next) => {
  if (to.meta.requiredLogin)
    if (Store.state.sessionModule.user) {
      next();
    } else {
      next("/");
    }
  else {
    next();
  }
}); */

export default router;

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { gamesModule } from "./modules/games";
import { favoritesModule } from "./modules/favorites";
import { sessionModule } from "./modules/session";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    session: sessionModule,
    games: gamesModule,
    favorites: favoritesModule,
  },
});

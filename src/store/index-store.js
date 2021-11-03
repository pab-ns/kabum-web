import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { juegosModule } from "./juegosModule";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    juegosModule,
  },
});
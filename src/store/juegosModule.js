import Firebase from "firebase";

export const juegosModule = {
  namespaced: true,
  state: {
    data: [],
    categoriasData: [],
    filteredByCategory: "",
  },

  getters:{
    gamesByCategory(state) {
      return state.data.filter((game) => 
        game.categoria.includes(state.filteredByCategory.toLowerCase()))
    },
  },

  mutations: {
    SET_JUEGOS_DATA(state, newJuegosData) {
      state.data = newJuegosData;
    },

    FILTER_BY_CATEGORY(state, newFilter) {
      state.filteredByCategory = newFilter
    },

    SET_CATEGORIAS_DATA(state, newCategoriasData) {
      state.categoriasData = newCategoriasData;
    },
  },

  actions: {
    getAllJuegos(context) {
      Firebase.firestore()
        .collection("juegos")
        .get()
        .then((documents) => {
          const juegos = [];
          documents.forEach((document) => {
            juegos.push({ id: document.id, ...document.data() });
          });
          context.commit("SET_JUEGOS_DATA", juegos);
        });
    },

    getAllGames(context) {
      Firebase.firestore()
        .collection('juegos')
        .onSnapshot((documents) => {
        const games = [];
        documents.forEach((document) => {
            games.push({id: document.id, ...document.data() });
        });
        context.commit('SET_JUEGOS_DATA', games);
        });
    },

    getAllCategorias(context) {
      Firebase.firestore()
        .collection("categorias")
        .get()
        .then((documents) => {
          const categorias = [];
          documents.forEach((document) => {
            categorias.push({ id: document.id, ...document.data() });
          });
          context.commit("SET_CATEGORIAS_DATA", categorias);
        });
    },

    filterByCategory(context, newFilter) {
      context.commit('FILTER_BY_CATEGORY', newFilter)
    },


  },


};

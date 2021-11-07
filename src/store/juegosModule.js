import Firebase from "firebase";

export const juegosModule = {
  namespaced: true,
  state: {
    data: [],
    filteredByAbility: "",
    filteredByAge: "",
    filteredByWeather: "",
  },
  getters: {
    gamesByAbility(state) {
      if (state.filteredByAbility === '') {
        return state.data;
      } else {
          return state.data.filter((game) =>
              game.habilidad.includes(state.filteredByAbility.toLowerCase())
          )
      }
    },
    gamesByAge(state) {
      if (state.filteredByAge === '') {
        return state.data;
      } else if (state.filteredByAge === 'De 5 a 9 años') {
          return state.data.filter(game => game.edadmin < 10);
      } else if(state.filteredByAge === 'De 10 a 14 años') {
          return state.data.filter(game => game.edadmin < 15)
      } else if(state.filteredByAge === 'Desde 15 años') {
          return state.data.filter(game => game.edadmin >= 15)
      }
    },
    gamesByWeather(state) {
      if (state.filteredByWeather === '') {
        return state.data;
      } else {
          return state.data.filter((game) =>
              game.clima.includes(state.filteredByWeather.toLowerCase())
          )
      }
    },
  },
  mutations: {
    SET_JUEGOS_DATA(state, newJuegosData) {
      state.data = newJuegosData;
    },
    FILTER_BY_ABILITY(state, newFilter) {
      state.filteredByAbility = newFilter
    },
    FILTER_BY_AGE(state, newFilter) {
      state.filteredByAge = newFilter
    },
    FILTER_BY_WEATHER(state, newFilter) {
      state.filteredByWeather = newFilter
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
    filterByAbility(context, newFilter) {
      context.commit('FILTER_BY_ABILITY', newFilter)
    },
    filterByAge(context, newFilter) {
      context.commit('FILTER_BY_AGE', newFilter)
    },
    filterByWeather(context, newFilter) {
      context.commit('FILTER_BY_WEATHER', newFilter)
    },
  },
};

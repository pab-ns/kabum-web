import Firebase from "firebase";

export const gamesModule = {
  namespaced: true,
  state: {
    data: [],
    categoriasData: [],
    filteredByCategory: "",
    filteredByAbility: "",
    filteredByAge: "",
    filteredByWeather: "",
    filteredByTemperature: 0,
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
          return state.data.filter(game => game.edadmin >= 10 && game.edadmin < 15)
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
    gamesByCategory(state) {
      return state.data.filter((game) => 
        game.categoria.includes(state.filteredByCategory.toLowerCase()))
    },
    gamesByTemperature(state) {
      console.log(state.filterByTemperature);
      if (state.filteredByTemperature <= 15) {
        return state.data.filter(game => game.clima === "frío");
      } else if(state.filteredByTemperature > 15 && state.filteredByTemperature <= 24) {
          return state.data.filter(game => game.clima === "templado")
      } else if(state.filteredByTemperature > 25) {
          return state.data.filter(game => game.clima === "caluroso")
      }
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
      state.categoriasData = newCategoriasData
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
    FILTER_BY_TEMPERATURE(state, newFilter) {
      state.filteredByTemperature = newFilter;
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
    filterByCategory(context, newFilter) {
      context.commit('FILTER_BY_CATEGORY', newFilter)
    },
    filterByTemperature(context, newFilter) {
      context.commit('FILTER_BY_TEMPERATURE', newFilter)
    },
  },    
};

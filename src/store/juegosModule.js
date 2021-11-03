import Firebase from "firebase";

export const juegosModule = {
  namespaced: true,
  state: {
    data: [],
    currentType: 'menu'
  },
  mutations: {
    SET_JUEGOS_DATA(state, newJuegosData) {
      state.data = newJuegosData;
    },
    setCurrentType(state, type) {
        state.currentType = type
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
    
  },
};
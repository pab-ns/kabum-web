import Firebase from "firebase";

export const juegosModule = {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    SET_JUEGOS_DATA(state, newJuegosData) {
      state.data = newJuegosData;
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

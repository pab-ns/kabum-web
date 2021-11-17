import Firebase from "firebase";
import Router from "../router/index-router";

export const sessionModule = {
  namespaced: true,
  state: {
    user: null,
  },

  getters: {
    isAdmin(state) {
      return state.user.rol == "admin";
    },
    isUser(state) {
      return state.user.rol == "user";
    },
  },
  mutations: {
    SET_CURRENT_USER(state, newUser) {
      state.user = newUser;
    },
    CREATE_NEW_USER(state, newUser) {
      state.user = newUser;
    },
    LOGOUT_USER(state) {
      state.user = null
    },
  },
  actions: {
    subscribeToAuthStateChange(context) {
      Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          Firebase.firestore()
            .collection("usuarios")
            .get()
            .then((documents) => {
              const newUser = {
                email: user.email,
                rol: "user",
                name: "",
                lastName: "",
              };
              documents.forEach((document) => {
                const data = document.data();
                if (data.email === user.email) {
                  newUser.rol = data.rol;
                  newUser.id = document.id;
                  newUser.name = data.name;
                  newUser.lastName = data.lastName;
                }
              });
              context.commit("SET_CURRENT_USER", { ...newUser });
              Router.push({ name: "Home" });
            });
        } else {
          context.commit("SET_CURRENT_USER", null);
        }
      });
    },
    setCurrentUser(context, user) {
        context.commit("SET_CURRENT_USER", user);
    },
    createNewUser(context, user) {
        context.commit("CREATE_NEW_USER", user);
    },
    logoutUser(context) {
      context.commit("LOGOUT_USER");
    },
  },
};
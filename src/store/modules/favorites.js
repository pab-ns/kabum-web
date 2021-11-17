const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const favoritesModule = {
  namespaced: true,
  state: {
    todosLosFavoritos: [],
  },
  getters: {
    totalFavoritos(state) {
      return state.todosLosFavoritos.reduce((accumlator, juego) => {
        accumlator += Math.round(juego.precio * juego.cantidad);
        return accumlator;
      }, 0);
    },
  },

  mutations: {
    AGREGAR_FAVORITOS(state, nuevoJuegoFavorito) {
      state.todosLosFavoritos.push(nuevoJuegoFavorito);
    },
    AGREGAR_CANTIDAD_FAVORITOS(state, codigoJuego) {
      state.todosLosFavoritos[codigoJuego].cantidad++;
    },
    RESTAR_CANTIDAD_FAVORITOS(state, codigoJuego) {
      state.todosLosFavoritos[codigoJuego].cantidad--;
    },
    QUITAR_CANTIDAD_FAVORITOS(state, codigoJuego) {
      state.todosLosFavoritos.splice(codigoJuego, 1);
    },
    BORRAR_TODO_FAVORITOS(state) {
      state.todosLosFavoritos = [];
    },
  },
  actions: {
    agregarFavorito(context, juego) {
      //   console.log(juego);
      const codigoDelJuego = context.state.todosLosFavoritos.findIndex(
        (juegoEnFavorito) => juegoEnFavorito.nombre === juego.nombre
      );
      //   no encontrado
      if (codigoDelJuego === -1) {
        // eslint-disable-next-line no-unused-vars
        const { stock, ...nuevoJuegoFavorito } = juego;
        context.commit("AGREGAR_FAVORITOS", {
          ...nuevoJuegoFavorito,
          cantidad: 1,
        });
      } else {
        context.commit("AGREGAR_CANTIDAD_FAVORITOS", codigoDelJuego);
      }
    },
    restarFavorito(context, juego) {
      //   console.log(juego);
      const codigoDelJuego = context.state.todosLosFavoritos.findIndex(
        (juegoEnFavorito) => juegoEnFavorito.nombre === juego.nombre
      );
      if (codigoDelJuego >= 0) {
        if (context.state.todosLosFavoritos[codigoDelJuego].cantidad > 1) {
          context.commit("RESTAR_CANTIDAD_FAVORITOS", codigoDelJuego);
        } else {
          context.commit("QUITAR_CANTIDAD_FAVORITOS", codigoDelJuego);
        }
      } else {
        console.error("Error. El juego no existe en Favoritos");
      }
    },
    async solicitudJuegos(context) {
      await delay(2000);
      context.commit("BORRAR_TODO_FAVORITOS");
    },
  },
};

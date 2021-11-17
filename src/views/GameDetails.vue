<template> 
  <div>
    <!--<h1>Detalle Juego: {{ $route.params.id }}</h1>-->
    <v-container>
      <v-layout row>
        <v-col cols="6">
          <v-img :contain="true" :src="juego.img"></v-img>
        </v-col>
        <v-col cols="6" class="mt-16">
          <h1>{{ juego.nombre }}</h1>
          <h2>$ {{ juego.precio.toLocaleString("de-DE") }}</h2>
          <!-- <h2>$ {{ juego.precio }}</h2> -->
          <br />
          <p>{{ juego.descripcion }}</p>
          <small>
            <strong>Jugadores: </strong>
            <span
              >Min: {{ juego.jugadores[0] }} | Max: {{ juego.jugadores[1] }}
            </span>
          </small>
          <br />
          <small>
            <strong>Categoría(s): </strong>{{ juego.categoria[0] }}-{{
              juego.categoria[1]
            }}</small
          >
          <br />
          <small> <strong>Ideal para un día </strong>{{ juego.clima }} </small>
          <br />
          <small> <strong>Código: </strong>{{ juego.codigo }} </small>
          <br />
          <br />
          <v-btn color="primary" large @click="agregarJuegoAFavorito">
            Agregar a Favoritos
          </v-btn>
        </v-col>
      </v-layout>

      <!-- modal agregado a favorito -->
      <div>
        <v-dialog v-model="JuegoAgregadoAFavorito" max-width="500" class="flex">
          <v-card>
            <v-container>
              <v-card-text>
                <h2 class="text-center">Producto agregado a Favoritos</h2>
              </v-card-text>
              <v-row class="ma-3 justify-space-around">
                <v-btn
                  color="orange"
                  class="align-self-center zoom white--text"
                  @click="JuegoAgregadoAFavorito = false"
                >
                  OK
                </v-btn>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
      </div>
    </v-container>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  data: () => ({
    JuegoAgregadoAFavorito: false,
  }),
  props: {
    juego: { type: Object, required: true },
  },
  methods: {
    agregarJuegoAFavorito() {
      this.$store.dispatch("favorites/agregarFavorito", this.juego);
      this.JuegoAgregadoAFavorito = true;
    },
  },
  name: "Detallejuego",
  beforeRouteEnter(to, from, next) {
    Firebase.firestore()
      .collection("juegos")
      .doc(to.params.id)
      .get()
      .then((document) => {
        next((viewModel) => {
          viewModel.juego = { id: document.id, ...document.data() };
        });
      });
  },
};
</script>

<style></style>

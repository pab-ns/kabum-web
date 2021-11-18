<template> 
    <v-container>
      <div class="my-5">
      <v-row>
        <v-col sm="6">
          <v-img :contain="true" :src="juego.img"></v-img>
        </v-col>
        <v-col sm="6" class="my-5">
          <h1>{{ juego.nombre }}</h1>
          <h3 class="orange--text text--lighten-1">$ {{ juego.precio.toLocaleString("de-DE") }}</h3>
          <p class="mt-2 text-font">{{ juego.descripcion }}</p>
          <small class="text-font">
            <strong>Jugadores: </strong>
            <span>
              Min: {{ juego.jugadores[0] }} | Max: {{ juego.jugadores[1] }}
            </span>
          </small>
          <br />
          <small class="text-font">
            <strong>Edad mínima: </strong>
            <span>
              {{ juego.edadmin }} años
            </span>
          </small>
          <br />
          <small class="text-font">
            <strong>Tiempo de juego: </strong>
            <span>
              {{ juego.duracion[0] }}-{{ juego.duracion[1] }} min
            </span>
          </small>
          <br />
          <small class="text-font">
            <strong>Categorías: </strong>
            {{ juego.categoria[0] }}-{{ juego.categoria[1] }}
          </small>
          <br />
          <small class="text-font">
            <strong>Habilidades: </strong>
            {{ juego.habilidad[0] }}-{{juego.habilidad[1]}}
          </small>
          <br />
          <small class="text-font"><strong>Ideal para un día </strong>{{ juego.clima }} </small>
          <br />
          <button v-if="$store.state.session.user !== null" class="pushable mt-6" @click="agregarJuegoAFavorito">
            <span class="front">AGREGAR A FAVORITOS</span>
          </button>
          <div v-else class="mt-6">
            <h4>Inicia sesión o regístrate para agregar este juego a favoritos</h4>
          </div>
        </v-col>
      </v-row>
      </div>

      <!-- modal agregado a favorito -->
      <div>
        <v-dialog v-model="JuegoAgregadoAFavorito" max-width="500" class="flex">
          <v-card>
            <v-container>
              <v-card-text>
                <h3 class="text-center">Producto agregado a Favoritos</h3>
              </v-card-text>
              <v-row class="ma-3 justify-space-around">
                <button class="align-self-center zoom pushable mt-2" @click="JuegoAgregadoAFavorito = false">
                  <span class="front">OK</span>
                </button>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
      </div>
    </v-container>
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

<style scoped>
.text-font {
    font-family: 'Outfit', sans-serif;
}
</style>

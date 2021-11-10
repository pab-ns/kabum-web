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
          <h2>$ {{ juego.precio }}</h2>
          <!-- <h2>$ {{ juego.precio.toString().toLocaleLowerCase() }}</h2> -->
          <br />
          <p>{{ juego.descripcion }}</p>
          <small>
            <strong>Jugadores: </strong>
            <span
              >Min: {{ juego.jugadores[0] }} | Max: {{ juego.jugadores[1] }}
            </span>
          </small>
          <br />
          <small> <strong>Categoría(s): </strong>{{ juego.categoria }} </small>
          <br />
          <small> <strong>Ideal para un día </strong>{{ juego.clima }} </small>
          <br />
          <small> <strong>Código: </strong>{{ juego.codigo }} </small>
          <br />
          <br />
          <v-btn color="primary" large @click="agregarJuegoFavoritos">
            Agregar a Favoritos
          </v-btn>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
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
  data: () => ({
    juego: "",
  }),
  methods: {
    agregarJuegoFavoritos() {
      console.log({ producto: this.producto });
    },
  },
};
</script>

<style></style>

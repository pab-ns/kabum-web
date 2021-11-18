<template>
  <div>
    <v-container>
      <v-layout row>
        <v-col sm="3">
          <v-img :contain="true" :src="juego.img" @click="gameDetails(juego)"></v-img>
        </v-col>
        <v-col sm="9" class="">
          <h2>{{ juego.nombre }}</h2>
          <h3 class="orange--text text--lighten-1">$ {{ juego.precio.toLocaleString("de-DE") }}</h3>
          <p class="text-font"><strong>Cantidad:</strong> {{ juego.cantidad }}</p>
          <div>
            <v-btn
              color="orange"
              fab
              x-small
              outlined
              class="mx-1"
              @click="$store.dispatch('favorites/agregarFavorito', juego)"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn
              color="orange"
              fab
              x-small
              outlined
              class="mx-1"
              @click="$store.dispatch('favorites/restarFavorito', juego)"
            >
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </div>
          <br />
          <small class="text-font">
            <strong>
              Subtotal: ${{ (juego.cantidad * juego.precio).toLocaleString("de-DE")}}
            </strong>
          </small>
        </v-col>
      </v-layout>
      <v-divider class="orange my-5"></v-divider>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "JuegoFavorito",
  props: {
    juego: { type: Object, required: true },
  },
  methods: {
    gameDetails(juego) {
      this.$router.push(`/juegos/${juego.id}`);
    },
  },
};
</script>

<style>
.text-font {
    font-family: 'Outfit', sans-serif;
}
</style> 

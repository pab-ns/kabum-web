<template>
  <div>
    <v-container>
      <v-layout row>
        <v-col cols="3">
          <v-img :contain="true" :src="juego.img"></v-img>
        </v-col>
        <v-col cols="9" class="mt-16">
          <h1>{{ juego.nombre }}</h1>
          <h2>$ {{ juego.precio.toLocaleString("de-DE") }}</h2>
          <p><strong>Cantidad:</strong> {{ juego.cantidad }}</p>
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
          <small>
            <strong
              >Subtotal: ${{
                (juego.cantidad * juego.precio).toLocaleString("de-DE")
              }}</strong
            >
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
};
</script>

<style></style> 

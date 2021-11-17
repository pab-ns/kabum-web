<template>
  <div>
    <h1>Favoritos</h1> 
    <br />
    <FavoriteGame
      v-for="(juego, $index) in $store.state.favorites.todosLosFavoritos"
      :key="$index"
      :juego="juego"
    />
    <!-- <pre>{{ $store.state.favoritosModule.todosLosFavoritos }}</pre> -->
    <div class="text-center my-5">
      <h2 class="font-weight-bold">
        Total: $
        {{
          $store.getters["favorites/totalFavoritos"].toLocaleString(
            "de-DE"
          )
        }}
      </h2>
      <v-btn color="primary" large @click="enviarPeticionJuegos">
        Enviar Petición
      </v-btn>
    </div>
  </div>
</template>

<script>
import FavoriteGame from "../components/Favorites/FavoriteGame.vue";
export default {
  name: "Favoritos",
  components: { FavoriteGame },
  methods: {
    async enviarPeticionJuegos() {
      await this.$store.dispatch("favorites/solicitudJuegos");
      alert(
        "Hemos enviado la solicitud para tu juegos. Te responderemos dentro de las próximas 24 horas."
      );
      this.$router.push("/");
    },
  },
};
</script>

<style></style>

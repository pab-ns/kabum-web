<template>
  <div>
    <h1>Favoritos</h1>
    <br />
    <JuegoFavorito
      v-for="(juego, $index) in $store.state.favoritosModule.todosLosFavoritos"
      :key="$index"
      :juego="juego"
    />
    <!-- <pre>{{ $store.state.favoritosModule.todosLosFavoritos }}</pre> -->
    <div class="text-center my-5">
      <h2 class="font-weight-bold">
        Total: $
        {{
          $store.getters["favoritosModule/totalFavoritos"].toLocaleString(
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
import JuegoFavorito from "../components/Favoritos/JuegoFavorito.vue";
export default {
  name: "Favoritos",
  components: { JuegoFavorito },
  methods: {
    async enviarPeticionJuegos() {
      await this.$store.dispatch("favoritosModule/solicitudJuegos");
      alert(
        "Hemos enviado la solicitud para tu juegos. Te responderemos dentro de las próximas 24 horas."
      );
      this.$router.push("/");
    },
  },
};
</script>

<style></style>

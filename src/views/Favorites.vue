<template>
  <div>
    <h1 class="text-center mt-3">¡Hola {{ $store.state.session.user.name }}! Estos son tus juegos favoritos:</h1> 
    <br />
    <div  v-if="$store.state.favorites.todosLosFavoritos.length > 0">
      <FavoriteGame
        v-for="(juego, $index) in $store.state.favorites.todosLosFavoritos"
        :key="$index"
        :juego="juego"
      />
      <div class="text-center mt-5 mb-10">
        <h3 class="font-weight-bold mb-3">
          Total: ${{$store.getters["favorites/totalFavoritos"].toLocaleString("de-DE")}}
        </h3>
        <button class="pushable mt-2" @click="enviarPeticionJuegos">
          <span class="front">ENVIAR PETICIÓN</span>
        </button>
      </div>
    </div>
    <div v-else class="mt-10 text-center">
      <h3 class="pa-5">Ups, lo sentimos, aún no tienes ningún favorito.</h3>
      <button class="pushable mt-2" @click="$router.push('/')">
        <span class="front">SEGUIR MIRANDO</span>
      </button>
    </div>

    <!-- modal agregado a favorito -->
      <div>
        <v-dialog v-model="peticionJuego" max-width="500" class="flex">
          <v-card>
            <v-container>
              <v-card-text>
                <h3 class="text-center lines">Hemos enviado la solicitud para tus juegos. Te responderemos dentro de las próximas 24 horas.</h3>
              </v-card-text>
              <v-row class="ma-3 justify-space-around">
                <button class="align-self-center zoom pushable mt-2" @click="peticionJuego = false">
                  <span class="front">OK</span>
                </button>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
      </div>
  </div>
</template>

<script>
import FavoriteGame from "../components/Favorites/FavoriteGame.vue";
export default {
  name: "Favoritos",
  components: { FavoriteGame },
  data: () => ({
    peticionJuego: false,
  }),
  methods: {
    async enviarPeticionJuegos() {
      await this.$store.dispatch("favorites/solicitudJuegos");
      this.peticionJuego = true;
    },
  }
};
</script>

<style scoped>
.lines {
  line-height: 1.2;
}
</style>


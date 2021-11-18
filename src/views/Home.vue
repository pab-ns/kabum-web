<template>
  <div>
    <PopularGames/>
    <Info />
    <Api />

    <div>
      <h2>Todos los Juegos</h2>
      <v-slide-group class="pa-4" show-arrows>
        <v-slide-item
          v-for="juego in $store.state.games.data"
          :key="juego.codigo"
        >
          <GameCard :value="juego" />
        </v-slide-item>
      </v-slide-group>
    </div>

    <div>
      <h2>Buscar Juegos Según Habilidad</h2>
      <v-select
        class="my-5 text-font"
        :items="abilities"
        label="Buscar por habilidad"
        rounded
        dense
        outlined
        :value="$store.state.games.filteredByAbility"
        @input="handleAbilityInput"
      ></v-select>
      <v-slide-group class="pa-4" show-arrows>
        <v-slide-item v-for="game in abilityGamesFilter" :key="game.codigo">
          <GameCard :value="game" />
        </v-slide-item>
      </v-slide-group>
    </div>

    <div>
      <h2>Buscar Juegos Según Edad</h2>
      <v-select
        class="my-5 text-font"
        :items="ages"
        label="Buscar por edad"
        rounded
        dense
        outlined
        :value="$store.state.games.filteredByAge"
        @input="handleAgeInput"
      ></v-select>
      <v-slide-group class="pa-4" show-arrows center-active>
        <v-slide-item v-for="game in ageGamesFilter" :key="game.codigo">
          <GameCard :value="game" />
        </v-slide-item>
      </v-slide-group>
    </div>

    <div>
      <h2>Buscar Juegos Según Clima</h2>
      <v-select
        class="my-5 text-font"
        :items="weather"
        label="Buscar por clima"
        rounded
        dense
        outlined
        :value="$store.state.games.filteredByWeather"
        @input="handleWeatherInput"
      ></v-select>
      <v-slide-group class="pa-4" show-arrows center-active>
        <v-slide-item v-for="game in weatherGamesFilter" :key="game.codigo">
          <GameCard :value="game" />
        </v-slide-item>
      </v-slide-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    GameCard: () => import("../components/Home/GameCard.vue"),
    PopularGames: () => import("../components/Home/PopularGames.vue"),
    Info: () => import("../components/Home/Info.vue"),
    Api: () => import("../components/Home/Api.vue"),
  },
  data: () => ({
    abilities: [
      "Memoria",
      "Deducción",
      "Creatividad",
      "Negociación",
      "Cooperación",
      "Narración",
    ],
    ages: ["De 5 a 9 años", "De 10 a 14 años", "Desde 15 años"],
    weather: ["Caluroso", "Templado", "Frío"],
    juegos: [],
  }),
  methods: {
    handleAbilityInput(event) {
      this.$store.dispatch("games/filterByAbility", event);
    },
    handleAgeInput(event) {
      this.$store.dispatch("games/filterByAge", event);
    },
    handleWeatherInput(event) {
      this.$store.dispatch("games/filterByWeather", event);
    },
  },
  computed: {
    abilityGamesFilter() {
      return this.$store.getters["games/gamesByAbility"];
    },
    ageGamesFilter() {
      return this.$store.getters["games/gamesByAge"];
    },
    weatherGamesFilter() {
      return this.$store.getters["games/gamesByWeather"];
    },
  },
  mounted() {
    this.$store.dispatch("games/getAllJuegos");
  },
};
</script>

<style scoped>
.text-font {
    font-family: 'Outfit', sans-serif;
}
</style>
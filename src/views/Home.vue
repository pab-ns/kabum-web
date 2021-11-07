<template>
  <div>
    <Destacados />
    <Info />

    <div>
      <h1>Todos los Juegos</h1>
      <v-slide-group class="pa-4" show-arrows>
        <v-slide-item
          v-for="juego in $store.state.juegosModule.data"
          :key="juego.codigo"
        >
          <GameCard :value="juego" />
        </v-slide-item>
      </v-slide-group>
    </div>

    <div>
      <h2>Buscar Juegos Según Habilidad</h2>
      <v-select
        class="my-5"
        :items="abilities"
        label="Buscar por edad"
        rounded
        dense
        outlined
        :value="$store.state.juegosModule.filteredByAbility"
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
        class="my-5"
        :items="ages"
        label="Buscar por edad"
        rounded
        dense
        outlined
        :value="$store.state.juegosModule.filteredByAge"
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
        class="my-5"
        :items="weather"
        label="Buscar por clima"
        rounded
        dense
        outlined
        :value="$store.state.juegosModule.filteredByWeather"
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
    Destacados: () => import("../components/Home/Destacados.vue"),
    Info: () => import("../components/Home/Info.vue"),
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
    weather: ["Soleado", "Nublado", "Lluvioso"],
    juegos: [],
  }),
  methods: {
    handleAbilityInput(event) {
      this.$store.dispatch("juegosModule/filterByAbility", event);
    },
    handleAgeInput(event) {
      this.$store.dispatch("juegosModule/filterByAge", event);
    },
    handleWeatherInput(event) {
      this.$store.dispatch("juegosModule/filterByWeather", event);
    },
  },
  computed: {
    abilityGamesFilter() {
      return this.$store.getters["juegosModule/gamesByAbility"];
    },
    ageGamesFilter() {
      return this.$store.getters["juegosModule/gamesByAge"];
    },
    weatherGamesFilter() {
      return this.$store.getters["juegosModule/gamesByWeather"];
    },
  },
  mounted() {
    this.$store.dispatch("juegosModule/getAllJuegos");
  },
};
</script>

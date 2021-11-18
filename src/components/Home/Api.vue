<template>
  <div>
    <v-container fluid>
      <h3 class="text-center">
        En tu ciudad, actualmente, está
        <span class="orange--text text--lighten-1">{{ ciudad.wx_desc }}</span> con una
        temperatura de <span class="orange--text text--lighten-1">{{ temperature }}ºC</span>.
        Te recomendamos los siguientes juegos:
      </h3>
      <v-slide-group class="pa-4" show-arrows>
        <v-slide-item v-for="game in temperatureGamesFilter" :key="game.codigo">
          <GameCard :value="game" />
        </v-slide-item>
      </v-slide-group>
      <h2 v-if="errorStr" class="text-center red--text">
        Lo sentimos, ha ocurrido el siguiente error: {{ errorStr }}
      </h2>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {
    GameCard: () => import("./GameCard.vue"),
  },
  name: "Api",
  data: () => ({
    location: null,
    gettingLocation: false,
    errorStr: null,
    ciudad: "",
    geoLat: 0,
    geoLon: 0,
    temperature: 0,
  }),
  methods: {
    fetchClima() {
      fetch(
        `http://api.weatherunlocked.com/api/current/${this.geoLat},${this.geoLon}?lang=es&app_id=dfa0ec32&app_key=e15d5d5c0b697a0ee31f173be3971fef`
      )
        .then((response) => {
          // esto devuelve una promsesa
          return response.json();
        })
        .then((json) => (this.ciudad = json))
        .then((json) => (this.temperature = json.temp_c))
    },
    changeTemperature() {
      this.$store.dispatch('games/filterByTemperature', this.temperature);
    },
  },
  computed: {
    temperatureGamesFilter(){
      return this.$store.getters['games/gamesByTemperature']
    },
  },
  created() {
    // API GEO
    //do we support geolocation
    if (!("geolocation" in navigator)) {
      this.errorStr =
        "Geolocalización no esta habilitado. Habilita el serivicio para recomendar juegos según el clima de tu ciudad.";
      return;
    }
    // get position
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.gettingLocation = false;
        this.location = pos;
        this.geoLat = pos.coords.latitude;
        this.geoLon = pos.coords.longitude;
        // console.log(typeof this.geoLat);
        // console.log(this.geoLon);
        // API Clima
        this.fetchClima();
      },

      (err) => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      }
    );
  },
  beforeUpdate(){
    this.changeTemperature();
  }
};
</script>

<style></style>

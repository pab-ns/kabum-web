<template>
  <div>
    <!-- <h2>API GEO</h2>
    <p>Latitud: {{ geoLat }}</p>
    <p>Longitud: {{ geoLon }}</p>

    <h2>API Weather</h2>
    <p>Clima según mi locación: {{ ciudad.temp_c }}</p>
    <pre>{{ ciudad }}</pre> -->

    <v-container fluid>
      <h2 class="text-center blue--text font-weight-bold">
        En tu ciudad, actualmente, está
        <span class="orange--text">{{ ciudad.wx_desc }}</span> con una
        temperatura de <span class="orange--text">{{ ciudad.temp_c }}ºC</span>.
        <br />
        Recomendamos los siguientes juegos:
      </h2>
      <h2 v-if="errorStr" class="text-center red--text">
        Lo sentimos, ha ocurrido el siguiente error: {{ errorStr }}
      </h2>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Api",
  data: () => ({
    location: null,
    gettingLocation: false,
    errorStr: null,
    ciudad: "",
    geoLat: 0,
    geoLon: 0,
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
        .then((json) => (this.ciudad = json));
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
};
</script>

<style></style>

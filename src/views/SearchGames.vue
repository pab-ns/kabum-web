<template>
  <div>
    <h1 class="text-center mt-3">Buscador de Juegos</h1>

    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
        :headers="headers"
        :items="$store.state.games.data"
        :search="search"
        class="text-font"
        >
        <template v-slot:[`item.nombre`]="{ item }">
            <v-chip color="orange lighten-3" @click="gameDetails(item)">{{ item.nombre }}</v-chip>
        </template>

        <template v-slot:[`item.categoria`]="{ item }">
            {{ item.categoria[0] }}-{{ item.categoria[1] }}
        </template>

        <template v-slot:[`item.habilidad`]="{ item }">
            {{ item.habilidad[0] }}-{{ item.habilidad[1] }}
        </template>

        <template v-slot:[`item.jugadores`]="{ item }">
            {{ item.jugadores[0] }}-{{ item.jugadores[1] }}
        </template>

        <template v-slot:[`item.duracion`]="{ item }">
            {{ item.duracion[0] }}-{{ item.duracion[1] }} min
        </template>

        <template v-slot:[`item.edadmin`]="{ item }">
            {{ item.edadmin }} años
        </template>

        <template v-slot:[`item.precio`]="{ item }">
            <v-chip color="success">${{ item.precio.toLocaleString('de-DE') }}</v-chip>
        </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "Juegos",
  mounted() {
    this.$store.dispatch("games/getAllGames");
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "Nombre",
        value: "nombre",
      },
      { text: "Categoría", value: "categoria" },
      { text: "Habilidades", value: "habilidad" },
      { text: "Jugadores", value: "jugadores" },
      { text: "Tiempo de juego", value: "duracion" },
      { text: "Edad mínima", value: "edadmin" },
      { text: "Precio", value: "precio" },
    ],
  }),
  methods: {
    gameDetails(item) {
      this.$router.push(`/juegos/${item.id}`);
    },
  },
};
</script>

<style scoped>
.text-font {
    font-family: 'Outfit', sans-serif;
}
</style>
<template>
  <div>
    <h1>Juegos</h1>

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
      :items="$store.state.juegosModule.data"
      :search="search"
    >
      <template v-slot:[`item.nombre`]="{ item }">
        <v-chip @click="detalleJuego(item)">{{ item.nombre }}</v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "juegos",
  mounted() {
    this.$store.dispatch("juegosModule/getAllJuegos");
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "Nombre",
        value: "nombre",
      },
      { text: "Categoría", value: "categoria" },
      { text: "Clima", value: "clima" },
      { text: "Min. Jug.", value: "jugadores[0]" },
      { text: "Max. Jug.", value: "jugadores[1]" },
      { text: "Precio", value: "precio" },
    ],
  }),
  methods: {
    detalleJuego(item) {
      this.$router.push(`/juegos/${item.id}`);
    },
  },
};
</script>

<style></style>

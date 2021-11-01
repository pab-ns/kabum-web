<template>
  <div>
    <h1>Buscador</h1>
    <!-- <pre>{{ juegos }}</pre> -->
    <!-- <p>{{ juegos[0].nombre }}</p> -->
    <!-- <ul>
      <li v-for="juego in juegos" :key="juego.codigo">{{ juego.nombre }}</li>
    </ul> -->
    <ul>
      <li v-for="juego in $store.state.juegosModule.data" :key="juego.codigo">
        {{ juego.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
// import Firebase from "firebase";
export default {
  name: "Buscador",
  mounted() {
    this.$store.dispatch("juegosModule/getAllJuegos");
  },
  data: () => ({
    juegos: [],
  }),
  // mounted() {
  //   Firebase.firestore()
  //     .collection("juegos")
  //     .get()
  //     .then((documents) => {
  //       documents.forEach((document) => {
  //         this.juegos.push({ id: document.id, ...document.data() });
  //       });
  //     });
  // },
};
</script>

<style></style>

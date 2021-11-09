<template>
  <div>
    <h1>Categorías</h1>
    <v-row class="my-5">
      <v-col v-for="categoria in $store.state.juegosModule.categoriasData" :key="categoria.id" cols="12" sm="3" md="4">
        <CategoriaCard :value="categoria"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Categorias",
  components: {
    CategoriaCard: () => import("../components/categorias/categoriaCard.vue")
  },
  mounted(){
    this.$store.dispatch("juegosModule/getAllCategorias")
  }
};
</script>

<style></style>

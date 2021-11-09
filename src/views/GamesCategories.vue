<template>
    <div>
        <h1>Categoría: {{ categoria.nombre }} </h1>
        <p>{{ categoria.descripcion }} </p>
        <v-row class="my-5">
            <v-col v-for="game in categoryGamesFilter" :key="game.codigo" cols="12" sm="3" md="4">
                <CategoryGameCard :value="game"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Firebase from "firebase";
export default {
    components: {
        CategoryGameCard: () => import("../components/categorias/CategoryGameCard.vue")
    },
    data: () => ({
        categoria: "",
    }),
    methods: {
        handleCategory (event) {
            this.$store.dispatch('juegosModule/filterByCategory', event)
        },
    },
    computed: {
        categoryGamesFilter(){
            return this.$store.getters['juegosModule/gamesByCategory']
        }, 
    },
    mounted() {
        this.$store.dispatch("juegosModule/getAllJuegos");
    },
    beforeRouteEnter(to, from, next) {
    Firebase.firestore()
      .collection("categorias")
      .doc(to.params.id)
      .get()
      .then((document) => {
        next((viewModel) => {
          viewModel.categoria = { id: document.id, ...document.data() };
        });
        next((viewModel) => {
          viewModel.$store.dispatch('juegosModule/filterByCategory', viewModel.categoria.nombre)
        });
      });
    },
}
</script>

<style>

</style>
<template>
    <div>
        <h1 class="text-center my-3">Categoría: {{ categoria.nombre }} </h1>
        <p class="text-center text-font">{{ categoria.descripcion }} </p>
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
        CategoryGameCard: () => import("../components/Categories/CategoryGameCard.vue")
    },
    data: () => ({
        categoria: "",
    }),
    methods: {
        handleCategory (event) {
            this.$store.dispatch('games/filterByCategory', event)
        },
    },
    computed: {
        categoryGamesFilter(){
            return this.$store.getters['games/gamesByCategory']
        }, 
    },
    mounted() {
        this.$store.dispatch("games/getAllGames");
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
          viewModel.$store.dispatch('games/filterByCategory', viewModel.categoria.nombre)
        });
      });
    },
}
</script>

<style scoped>
.text-font {
    font-family: 'Outfit', sans-serif;
}
p {
    font-size: 20px;
}
</style>
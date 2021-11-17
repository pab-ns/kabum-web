<template>
    <div>
        <h1 class="display-3 my-5 text-center">Administrador de Juegos</h1>
        <div class="text-center my-5">
            <v-btn depressed color="primary" @click.stop="showAddGame=true">
                Agregar juego
            </v-btn> 
        </div> 
        <AddGameModal v-model="showAddGame" />
        <v-data-table
        
        :headers="headers"
        :items="$store.state.games.data"
        >
            <template v-slot:[`item.nombre`]="{ item }">
                <v-chip @click="gameDetails(item)">{{ item.nombre }}</v-chip>
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
            
            <template v-slot:[`item.acciones`]="{ item }">
                <div>
                    <v-icon
                        small
                        @click="editGame(item)"
                    >
                        mdi-pencil
                    </v-icon>

                    <v-icon
                        small
                        @click="deleteGame(item)"
                    >
                        mdi-delete
                    </v-icon>
                </div>
            </template>
        </v-data-table>
    </div>
</template>

<script>
import Firebase from "firebase";
export default {
  name: "Juegos",
  components: {
    AddGameModal: () => import('../components/Admin/AddGameModal.vue'),
  },
  data: () => ({
    showAddGame: false,
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
      { text: "Stock", value: "stock" },
      { text: "Precio", value: "precio" },
      { text: 'Acciones', value: 'acciones' },
    ],
    games: [],
  }),
  methods: {
    gameDetails(item) {
        this.$router.push(`/juegos/${item.id}`);
    },
    editGame(item) {
        this.$router.push(`/admin/${item.id}`);
    },
    deleteGame(item) {
        if(confirm('¿Seguro que quieres borrar este juego?')){
          Firebase.firestore()
              .collection("juegos")
              .doc(item.id)
              .delete()
        }
    },
  },
  mounted() {
    this.$store.dispatch("games/getAllGames");
  },
};
</script>

<style></style>
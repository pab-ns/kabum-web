<template>
  <v-container>
    <h1 class="display-3 text-center my-5">
      Editando el juego: {{ game.nombre }}
    </h1>
    <v-form ref="form" lazy-validation>
      <v-text-field
        v-model="game.nombre"
        :counter="40"
        :rules="nameRules"
        label="Nombre"
        required
      ></v-text-field>

      <v-text-field
        v-model="game.codigo"
        :rules="rules"
        label="Código del juego"
        required
      ></v-text-field>

      <v-text-field
        v-model="game.img"
        :rules="rules"
        label="URL de la imagen del juego"
        required
      ></v-text-field>

      <v-textarea
        v-model="game.descripcion"
        :rules="rules"
        outlined
        required
        name="input-7-4"
        label="Descripción del juego"
      ></v-textarea>

      <v-text-field
        v-model.number="game.jugadores[0]"
        :rules="rules"
        type="number"
        label="Min. Jugadores"
        required
      ></v-text-field>

      <v-text-field
        v-model.number="game.jugadores[1]"
        :rules="rules"
        type="number"
        label="Max. Jugadores"
        required
      ></v-text-field>

      <v-text-field
        v-model.number="game.duracion[0]"
        :rules="rules"
        type="number"
        label="Tiempo de Juego Mínimo"
        required
      ></v-text-field>

      <v-text-field
        v-model.number="game.duracion[1]"
        :rules="rules"
        type="number"
        label="Tiempo de Juego Máximo"
        required
      ></v-text-field>

      <v-text-field
        v-model.number="game.edadmin"
        :rules="rules"
        type="number"
        label="Edad mínima de los jugadores"
        required
      ></v-text-field>

      <v-text-field
        v-model="game.categoria[0]"
        :rules="rules"
        label="1° Categoría del juego"
        required
      ></v-text-field>

      <v-text-field
        v-model="game.categoria[1]"
        :rules="rules"
        label="2° Categoría del juego"
        required
      ></v-text-field>

      <v-text-field
        v-model="game.habilidad[0]"
        :rules="rules"
        label="1° Habilidad que fomenta el juego"
        required
      ></v-text-field>

      <v-text-field
        v-model="game.habilidad[1]"
        :rules="rules"
        label="2° Habilidad que fomenta el juego"
        required
      ></v-text-field>

      <v-text-field
        v-model="game.clima"
        :rules="rules"
        label="Clima ideal para el juego"
        required
      ></v-text-field>

      <v-text-field
        v-model="game.stock"
        :rules="rules"
        type="number"
        label="Stock del juego"
        required
      ></v-text-field>

      <v-text-field
        v-model.number="game.precio"
        :rules="rules"
        type="number"
        label="Precio del juego"
        required
      ></v-text-field>

      <div class="text-center">
        <v-btn color="success" class="ma-2" @click="editGame"> Editar </v-btn>

        <v-btn color="error" class="ma-2" @click="reset">
          Limpiar Formulario
        </v-btn>

        <v-btn color="warning" class="ma-2" @click="resetValidation">
          Limpiar Validación
        </v-btn>

        <v-btn class="ma-2" color="primary" @click="backToAdmin">
          Regresar
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import Firebase from "firebase";
export default {
  data: () => ({
    game: null,
    nameRules: [
      (v) => !!v || "Ingrese un nombre",
      (v) =>
        (v && v.length <= 40) || "El nombre debe tener menos de 40 caracteres",
    ],
    rules: [(v) => !!v || "Complete la información"],
  }),
  methods: {
    editGame() {
      Firebase.firestore()
        .collection("juegos")
        .doc(this.game.id)
        .update(this.game)
        .then(() => {
          this.$router.push("/admin");
        });
    },
    backToAdmin() {
      this.$router.push("/admin");
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  beforeRouteEnter(to, from, next) {
    Firebase.firestore()
      .collection("juegos")
      .doc(to.params.id)
      .get()
      .then((document) => {
        next((vm) => {
          vm.game = { id: document.id, ...document.data() };
        });
      });
  },
};
</script>

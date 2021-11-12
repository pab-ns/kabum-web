<template>
  <v-app-bar app color="primary" dark>
    <router-link to="/">
      <img :src="require('../../assets/kabum.png')" height="30" />
    </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text to="/categorias">Categorias</v-btn>
      <v-btn text to="/juegos">Juegos</v-btn>
      <v-btn text to="/favoritos">Favoritos</v-btn>
      <v-btn text to="/admin">Administrador</v-btn>

      <SignInDialog />
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  components: {
    SignInDialog: () => import("../Sign/SignInDialog.vue"),
  },
};
</script>

<style></style>

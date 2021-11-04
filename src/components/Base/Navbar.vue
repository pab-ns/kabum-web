<template>
  <v-app-bar app color="primary" dark>
    <img :src="require('../../assets/kabum.png')" height="30" />
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text>Categorias</v-btn>
      <v-btn text>Buscador</v-btn>
      <v-btn text>Favoritos</v-btn>

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

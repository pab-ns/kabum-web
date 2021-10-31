<template>
  <v-app-bar app color="primary" dark>
    <router-link to="/">
      <img :src="require('../../assets/kabum.png')" height="30" />
    </router-link>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text to="/categorias">Categorias</v-btn>
      <v-btn text to="/buscador">Buscador</v-btn>
      <v-btn text to="/favoritos">Favoritos</v-btn>
      <v-btn text>
        <span>Iniciar Sesión</span> <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>

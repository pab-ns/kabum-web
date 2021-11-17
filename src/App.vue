<template>
  <v-app>
    <Navbar />
    <Footer />

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    Navbar: () => import("./components/Base/Navbar.vue"),
    Footer: () => import("./components/Base/Footer.vue"),
  },

  data: () => ({}),
   mounted() {
    this.$store.dispatch("sessionModule/subscribeToAuthStateChange");
  },
};
</script>

<style></style>

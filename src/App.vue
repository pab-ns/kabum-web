<template>
  <v-app>
    <Navbar />
    <Footer />
    <v-main>
      <v-container class="container">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
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
    this.$store.dispatch("session/subscribeToAuthStateChange");
  },
};
</script>

<style>
body, html {
  margin: 0;
  width: 100%;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  color: #448AFF;
}
h1 {
  font-size: 48px;
}
h2 {
  font-size: 40px;
}
h3 {
  font-size: 30px;
}
h4 {
  font-size: 25px;
}
h5 {
  font-size: 20px;
}
h6 {
  font-size: 18px;
}
p {
  color: #37474F;
}
.pushable {
  background: #FB8C00;
  border-radius: 30px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
}
.front {
  display: block;
  padding: 12px 42px;
  border-radius: 30px;
  font-size: 1.25rem;
  background: #FFB74D;
  color: white;
  transform: translateY(-6px);
  font-family: 'Fredoka One', cursive;
}
.pushable:active .front {
  transform: translateY(-2px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

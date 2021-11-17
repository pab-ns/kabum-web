<template>
  <div>
    <v-app-bar app color="primary" dark>
        <router-link to="/">
          <img :src="require('../../assets/kabum.png')" height="30" />
        </router-link>
        <v-spacer></v-spacer>
        <v-col class="d-none d-md-flex" cols="9">
          <v-row justify="end">
            <v-btn color="white" link text v-for="link in links" :key="link.text" router :to="link.route">
              {{ link.text }}
            </v-btn>
          </v-row>
        </v-col>
        <div v-if="$store.state.session.user !== null">
            <span>{{ $store.state.session.user.email }}</span>
            <v-btn icon @click="logout">
                <v-icon>mdi-logout</v-icon>
            </v-btn>
        </div>
        <div v-else>
            <SignInDialog/>
        </div>
        <v-app-bar-nav-icon class="d-flex d-md-none" @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-title>{{ link.text }}</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  components: {
    SignInDialog: () => import("../Sign/SignInDialog.vue"),
  },
  data: () => ({
        drawer: false,
        group: null,
    }),
  methods: {
      logout() {
        Firebase.auth()
          .signOut()
          .then(() => {
              this.$store.dispatch("session/logoutUser");
              this.$router.push("/");
          });
      }
  },
  computed: {
    links() {
      const links = [
            {
                text: "Categorias",
                route: "/categorias",
            },
            {
                text: "Buscador",
                route: "/buscador",
            },
      ];
      const user = this.$store.state.session.user
      if (user && this.$store.getters["session/isAdmin"]) {
        links.push({
          text: "Administrador",
          route: "/admin",
        });
      }
      if (user && this.$store.getters["session/isUser"]) {
        links.push({
          text: "Favoritos",
          route: "/favoritos",
        });
      }
      return links;
    },
  }
};
</script>

<style></style>

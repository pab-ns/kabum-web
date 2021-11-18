<template>
  <v-container>
        <v-card
          class="ma-4 align text-center"
          height="250px"
          width="150px"
          @click="gameDetails(value)"
        >
            <v-img
              height="150px"
              width="150px"
              :src="value.img"
            >
            </v-img>
            <v-card-text class="font-weight-medium pt-2 pb-0 text-font">
              {{ value.nombre }}
            </v-card-text>
            <v-card-text class="orange--text lighten-2--text py-2 text-font">
              ${{ value.precio.toLocaleString('de-DE') }}
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
  name: "GameCard",
  props: {
        value: { type: Object, required: true }
    },
  methods: {
    gameDetails(value) {
        this.$router.push(`/juegos/${value.id}`);
    },
  }
}
</script>

<style scoped>
.text-font {
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
}
</style>


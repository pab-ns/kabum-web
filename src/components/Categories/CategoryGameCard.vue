<template>
  <v-container>
        <v-card
          class="ma-4 align text-center pb-4"
          @click="gameDetails(value)"
        >
            <v-img
            :aspect-ratio="1/1"
            max-width="auto"
            :src="value.img"
            >
            </v-img>
            <v-card-title class="font-weight-medium pt-2 pb-0 justify-center blue--text text--accent-2 text-font">
              {{ value.nombre }}
            </v-card-title>
            <v-card-text class="orange--text lighten-2--text py-2 text-font">
              ${{ value.precio.toLocaleString('de-DE') }}
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "CategoryGameCard",
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
}
</style>
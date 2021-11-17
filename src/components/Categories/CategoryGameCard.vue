<template>
  <v-container>
        <v-card
          class="ma-4 align text-center"
          @click="gameDetails(value)"
        >
            <v-img
            :aspect-ratio="1/1"
            max-width="auto"
            :src="value.img"
            >
            </v-img>
            <v-card-title class="font-weight-medium pt-2 pb-0 justify-center">
              {{ value.nombre }}
            </v-card-title>
            <v-card-text class="orange--text lighten-2--text py-2">
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
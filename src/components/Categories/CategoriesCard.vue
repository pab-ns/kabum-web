<template>
    <div> 
      <v-card
        class="mx-auto"
        max-width="344"
      >
        <v-img
          :src="value.imagen"
          :aspect-ratio="1/1"
          max-width="auto"
        ></v-img>

        <v-card-title class="blue--text text--accent-2 justify-center text-font">
          {{value.nombre}}
        </v-card-title>

        <v-card-actions>
          <v-btn
            color="orange lighten-2"
            text
            @click="gameDetails(value)"
            class="text-font"
          >
            Ver juegos
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text class="text-font">
              {{value.descripcion}}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
</template>

<script>
export default {
    props: ["value"],
    data: () => ({
      show: false,
    }),
    methods: {
      gameDetails(value) {
          this.$router.push(`/categorias/${value.id}`);
      },
  },
};
</script>

<style scoped>
.text-font {
    font-family: 'Outfit', sans-serif;
}
</style>

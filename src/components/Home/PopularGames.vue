<template>
  <v-row >
      <v-carousel height="auto" cycle hide-delimiter-background show-arrows-on-hover>
        <router-link v-for="(item, i) in items" :key="i" link :to="item.to">
          <v-carousel-item :src="item.src"> </v-carousel-item>
        </router-link>
      </v-carousel>
  </v-row>
</template>

<script>
export default {
  name: "PopularGames",
  data: () => ({
    items: [
      {
        src: require("../../assets/banners/banner1.jpg"),
        to: "/juegos/5A1umf8UGZflg4zdtDEb",
      },
      {
        src: require("../../assets/banners/banner2.jpg"),
        to: "/",
      },
      {
        src: require("../../assets/banners/banner3.jpg"),
        to: "/juegos/DDVkfmf7RInuxvraDxew",
      },
    ],
  }),
};
</script>

<style>

</style>

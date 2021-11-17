<template>
  <v-carousel cycle height="auto" hide-delimiter-background show-arrows-on-hover>
    <router-link v-for="(item, i) in items" :key="i" link :to="item.to">
      <v-carousel-item :src="item.src"> </v-carousel-item>
    </router-link>
  </v-carousel>
</template>

<script>
export default {
  name: "Destacados",
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

<style></style>

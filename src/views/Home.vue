<template>
  <div>
    <!-- <small>Home</small> -->
    <Destacados />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Destacados: () => import("../components/Home/Destacados.vue"),
  },
};
</script>

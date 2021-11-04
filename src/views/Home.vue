<template>
  <div>
    <Destacados />
    <Info />
    <CompCategoriaA />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Destacados: () => import("../components/Home/Destacados.vue"),
    Info: () => import("../components/Home/Info.vue"),
    CompCategoriaA: () => import("../components/Home/CompCategoriaA.vue"),
  },
};
</script>

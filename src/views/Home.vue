<template>
  <div>
    <div>
      <h1>Todos los Juegos</h1>
      <v-slide-group
        class="pa-4"
        show-arrows
      >
        <v-slide-item 
          v-for="juego in $store.state.juegosModule.data" :key="juego.codigo"
        >
        <GameCard :value="juego" />
        </v-slide-item>
      </v-slide-group>
    </div>
    <div>
      <h1>Juegos Según Edad</h1>
      <v-chip-group column multiple active-class="orange--text">
          <v-chip filter outlined>
            Desde 5 años
          </v-chip>
          <v-chip filter outlined>
            Desde 10 años
          </v-chip>
          <v-chip filter outlined>
            Desde 15 años
          </v-chip>
      </v-chip-group>
      <v-slide-group class="pa-4" show-arrows>
          <v-slide-item 
            v-for="juego in $store.state.juegosModule.data" :key="juego.codigo"
          >
          <GameCard :value="juego" />
          </v-slide-item>
      </v-slide-group>
    </div>
    <div>
      <h1>Juegos Según Habilidad</h1>
      <v-chip-group column multiple active-class="orange--text">
          <v-chip filter outlined>
            Memoria
          </v-chip>
          <v-chip filter outlined>
            Deducción
          </v-chip>
          <v-chip filter outlined>
            Creatividad
          </v-chip>
          <v-chip filter outlined>
            Negociación
          </v-chip>
          <v-chip filter outlined>
            Cooperación
          </v-chip>
          <v-chip filter outlined>
            Narración
          </v-chip>
      </v-chip-group>
      <v-slide-group
        class="pa-4"
        show-arrows
      >
        <v-slide-item 
          v-for="juego in $store.state.juegosModule.data" :key="juego.codigo"
        >
        <GameCard :value="juego" />
        </v-slide-item>
      </v-slide-group>
    </div>
    <div>
      <h1>Juegos Según Clima</h1>
      <v-chip-group column multiple active-class="orange--text">
          <v-chip filter outlined>
            Soleado
          </v-chip>
          <v-chip filter outlined>
            Nublado
          </v-chip>
          <v-chip filter outlined>
            Lluvioso
          </v-chip>
      </v-chip-group>
      <v-slide-group
        class="pa-4"
        show-arrows
      >
        <v-slide-item 
          v-for="juego in $store.state.juegosModule.data" :key="juego.codigo"
        >
        <GameCard :value="juego" />
        </v-slide-item>
      </v-slide-group>
    </div>
  </div>
</template>

<script>
import GameCard from "../components/Home/GameCard.vue"
export default {
  name: "Home",
  data: () => ({
    juegos: [],
  }),
  components: { GameCard },
  mounted() {
    this.$store.dispatch("juegosModule/getAllJuegos");
  },
};
</script>

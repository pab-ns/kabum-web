<template>
    <v-dialog v-model="show" persistent max-width="600px">
        <v-card>
            <v-card-title class="text-font">
               Agregando Juego
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-form
                        @submit.prevent
                        ref="form"
                        lazy-validation
                    >

                        <v-text-field
                        v-model="game.nombre"
                        :counter="40"
                        :rules="nameRules"
                        label="Nombre"
                        required
                        class="text-font"
                        ></v-text-field>

                        <v-text-field
                        v-model="game.codigo"
                        :rules="rules"
                        label="Código del juego"
                        required
                        class="text-font"
                        ></v-text-field>

                        <v-text-field
                        v-model="game.img"
                        :rules="rules"
                        label="URL de la imagen del juego"
                        required
                        class="text-font"
                        ></v-text-field>

                        <v-textarea
                        v-model="game.descripcion"
                        :rules="rules"
                        outlined
                        required
                        name="input-7-4"
                        label="Descripción del juego"
                        class="text-font"
                        ></v-textarea>

                        <v-text-field
                        v-model.number="game.jugadores[0]"
                        :rules="rules"
                        type="number"
                        label="Min. Jugadores"
                        required
                        class="text-font"
                        ></v-text-field>

                        <v-text-field
                        v-model.number="game.jugadores[1]"
                        :rules="rules"
                        type="number"
                        label="Max. Jugadores"
                        required
                        class="text-font"
                        ></v-text-field>
                        
                        <v-text-field
                        v-model.number="game.duracion[0]"
                        :rules="rules"
                        type="number"
                        label="Tiempo de Juego Mínimo"
                        required
                        class="text-font"
                        ></v-text-field>

                        <v-text-field
                        v-model.number="game.duracion[1]"
                        :rules="rules"
                        type="number"
                        label="Tiempo de Juego Máximo"
                        required
                        class="text-font"
                        ></v-text-field>
                        
                        <v-text-field
                        v-model.number="game.edadmin"
                        :rules="rules"
                        type="number"
                        label="Edad mínima de los jugadores"
                        required
                        class="text-font"
                        ></v-text-field>

                        <v-text-field
                        v-model="game.categoria[0]"
                        :rules="rules"
                        label="1° Categoría del juego"
                        required
                        class="text-font"
                        ></v-text-field>

                        <v-text-field
                        v-model="game.categoria[1]"
                        :rules="rules"
                        label="2° Categoría del juego"
                        required
                        class="text-font"
                        ></v-text-field>

                        <v-text-field
                        v-model="game.habilidad[0]"
                        :rules="rules"
                        label="1° Habilidad que fomenta el juego"
                        required
                        class="text-font"
                        ></v-text-field>

                        <v-text-field
                        v-model="game.habilidad[1]"
                        :rules="rules"
                        label="2° Habilidad que fomenta el juego"
                        required
                        class="text-font"
                        ></v-text-field>

                        <v-text-field
                        v-model="game.clima"
                        :rules="rules"
                        label="Clima ideal para el juego"
                        required
                        class="text-font"
                        ></v-text-field>

                        <v-text-field
                        v-model="game.stock"
                        :rules="rules"
                        type="number"
                        label="Stock del juego"
                        required
                        class="text-font"
                        ></v-text-field>

                        <v-text-field
                        v-model.number="game.precio"
                        :rules="rules"
                        type="number"
                        label="Precio del juego"
                        required
                        class="text-font"
                        ></v-text-field>

                        <div class="text-center">
                            <v-btn
                            color="success"
                            class="ma-2 button-font"
                            @click="addGame"
                            @click.stop="show=false"
                            >
                            Agregar
                            </v-btn>

                            <v-btn
                            color="error"
                            class="ma-2 button-font"
                            @click="reset"
                            >
                            Limpiar Formulario
                            </v-btn>

                            <v-btn
                            color="warning"
                            class="ma-2 button-font"
                            @click="resetValidation"
                            >
                            Limpiar Validación
                            </v-btn>

                        </div>
                    </v-form>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" class="button-font" text @click.stop="show=false">
                    Cerrar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import Firebase from "firebase";
export default {
    data: () => ({
        game: {
            nombre: "",
            codigo: "",
            img: "",
            descripcion: "",
            jugadores: [],
            duracion: [],
            edadmin: 0,
            categoria: [],
            habilidad: [],
            clima: "",
            stock: 0,
            precio: 0,
        },
        nameRules: [
            v => !!v || 'Ingrese un nombre',
            v => (v && v.length <= 40) || 'El nombre debe tener menos de 40 caracteres',
        ],
        rules: [
            v => !!v || 'Complete la información',
        ],
    }),
    props: {
        value: Boolean
    },
    methods: {
        addGame () {
            Firebase.firestore()
                .collection("juegos")
                .add(this.game)
                .catch(() => {
                    alert("Hubo un error, intente nuevamente.");
                });
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
    },
    computed: {
        show: {
            get () {
                return this.value
            },
            set (value) {
                this.$emit('input', value)
            }
        }
    },
}
</script>

<style scoped>
.text-font {
    font-family: 'Outfit', sans-serif;
}
.button-font {
    font-family: 'Fredoka One', cursive;
}
</style>
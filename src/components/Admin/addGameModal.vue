<template>
    <v-dialog v-model="show" persistent max-width="600px">
        <v-card>
            <v-card-title>
                <span class="text-h5">Agregando Juego</span>
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
                        ></v-text-field>

                        <v-text-field
                        v-model="game.codigo"
                        :rules="rules"
                        label="Código del juego"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model="game.img"
                        :rules="rules"
                        label="URL de la imagen del juego"
                        required
                        ></v-text-field>

                        <v-textarea
                        v-model="game.descripcion"
                        :rules="rules"
                        outlined
                        required
                        name="input-7-4"
                        label="Descripción del juego"
                        ></v-textarea>

                        <v-text-field
                        v-model.number="game.jugadores[0]"
                        :rules="rules"
                        type="number"
                        label="Min. Jugadores"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model.number="game.jugadores[1]"
                        :rules="rules"
                        type="number"
                        label="Max. Jugadores"
                        required
                        ></v-text-field>
                        
                        <v-text-field
                        v-model.number="game.duracion[0]"
                        :rules="rules"
                        type="number"
                        label="Tiempo de Juego Mínimo"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model.number="game.duracion[1]"
                        :rules="rules"
                        type="number"
                        label="Tiempo de Juego Máximo"
                        required
                        ></v-text-field>
                        
                        <v-text-field
                        v-model.number="game.edadmin"
                        :rules="rules"
                        type="number"
                        label="Edad mínima de los jugadores"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model="game.categoria[0]"
                        :rules="rules"
                        label="1° Categoría del juego"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model="game.categoria[1]"
                        :rules="rules"
                        label="2° Categoría del juego"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model="game.habilidad[0]"
                        :rules="rules"
                        label="1° Habilidad que fomenta el juego"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model="game.habilidad[1]"
                        :rules="rules"
                        label="2° Habilidad que fomenta el juego"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model="game.clima"
                        :rules="rules"
                        label="Clima ideal para el juego"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model="game.stock"
                        :rules="rules"
                        type="number"
                        label="Stock del juego"
                        required
                        ></v-text-field>

                        <v-text-field
                        v-model.number="game.precio"
                        :rules="rules"
                        type="number"
                        label="Precio del juego"
                        required
                        ></v-text-field>

                        <div class="text-center">
                            <v-btn
                            color="success"
                            class="ma-2"
                            @click="addGame"
                            @click.stop="show=false"
                            >
                            Agregar
                            </v-btn>

                            <v-btn
                            color="error"
                            class="ma-2"
                            @click="reset"
                            >
                            Limpiar Formulario
                            </v-btn>

                            <v-btn
                            color="warning"
                            class="ma-2"
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
                <v-btn color="blue darken-1" text @click.stop="show=false">
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
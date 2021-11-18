<template>
    <div>
        <v-dialog v-model="registerDialog" width="500">
            <template v-slot:activator="{ on }">
                <v-btn text v-on="on" color="primary" class="button-font">Crear Cuenta</v-btn>
            </template>
            <v-card> 
                <v-card-text>
                    <v-form 
                    @submit.prevent
                    ref="form"
                    :model="form"
                    lazy-validation>
                        <v-card-title class="text-font">Crear Cuenta</v-card-title>
                        <v-text-field 
                        class="text-font"
                        outlined 
                        label="Nombre"
                        v-model="form.name"
                        :rules="rules"
                        required
                        ></v-text-field>
                        <v-text-field
                        class="text-font"
                        outlined 
                        label="Apellido"
                        v-model="form.lastName"
                        :rules="rules"
                        required
                        ></v-text-field>
                        <v-text-field
                        class="text-font"
                        outlined 
                        label="Correo electrónico"
                        v-model="form.email"
                        :rules="emailRules"
                        required
                        ></v-text-field>
                        <v-text-field 
                        class="text-font"
                        outlined 
                        label="Contraseña"
                        v-model="form.password"
                        :rules="passwordRules"
                        type="password"
                        required
                        ></v-text-field>
                        <v-text-field 
                        class="text-font"
                        outlined 
                        label="Repetir Contraseña"
                        v-model="form.repeatPassword"
                        :rules="[passwordRules, samePasswordRule]"
                        type="password"
                        required
                        ></v-text-field>
                        <v-btn color="success" class="button-font" type="submit" @click="registerForm">Crear</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>   
</template>


<script>
import Firebase from "firebase";
export default {
    data: () => ({
        registerDialog: false,
        registerSuccess: false,
        form: {
            name: "",
            lastName: "",
            email: "",
            password: "",
            repeatPassword: "",
        },
        valid: true,
        rules: [
            v => !!v || 'Por favor, complete la información',
        ],
        passwordRules: [
            v => !!v || 'Ingrese una contraseña',
            v => (v && v.length >= 6) || 'La contraseña debe tener mínimo 6 caracteres',
        ],
        emailRules: [
            v => !!v || 'Ingrese un correo',
            v => /.+@.+\..+/.test(v) || 'El correo debe ser válido',
        ],
    }),
    methods: {
        registerForm() {
            Firebase.auth().createUserWithEmailAndPassword(
                this.form.email, 
                this.form.password)
                .then((response) => {
                    this.$store.dispatch("session/createNewUser", { email: response.user.email });
                    Firebase.firestore().collection("usuarios").add({
                        email: this.form.email,
                        name: this.form.name,
                        lastName: this.form.lastName,
                        rol: "user",
                        });
                    this.$store.dispatch("subscribeToAuthStateChange");
                    this.$router.push("/");
                    this.registerDialog = false;
                })    
                .catch(() => {
                    alert("Hubo un error, intente nuevamente.");
                });
        },
    },
    computed: {
        samePasswordRule() {
            return () => (this.form.password === this.form.repeatPassword) || 'Las contraseñas deben coincidir'
        },
    },    
}
</script>

<style>
.text-font {
    font-family: 'Outfit', sans-serif;
}
.button-font {
    font-family: 'Fredoka One', cursive;
}
</style>
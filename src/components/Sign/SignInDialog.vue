<template>
<v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
        <v-btn text depressed v-on="on">
            Iniciar Sesión
            <v-icon>mdi-login</v-icon>
        </v-btn>
    </template>
    <v-card>
        <v-card-text>
            <v-form 
            ref="form"
            :model="form"
            lazy-validation>
                <v-card-title>Iniciar Sesión</v-card-title>
                <v-text-field 
                outlined 
                label="Correo electrónico"
                v-model="form.email"
                :rules="emailRules"
                type="email"
                name="email"
                ></v-text-field>
                <v-text-field 
                outlined 
                label="Contraseña"
                :counter="20"
                v-model="form.password"
                :rules="passwordRules"
                type="password"
                name="password"
                ></v-text-field>
            </v-form>
            <br>
            <v-row align="center" justify="space-around" class="mx-1 mb-3">
                <v-btn color="success" type="submit" @click="loginForm">Entrar</v-btn>
                <v-spacer></v-spacer>
                <RegisterDialog />
            </v-row>
        </v-card-text>
    </v-card>
</v-dialog>
</template>

<script>
import Firebase from "firebase";
export default {
    components: { RegisterDialog: () => import("../Sign/RegisterDialog.vue") },
    data: () => ({
        dialog: false,
        valid: true,
        form: { email: "", password: "" },
        passwordRules: [
            v => !!v || 'Ingrese una contraseña',
            v => (v && v.length <= 20) || 'La contraseña debe tener menos de 20 caracteres',
        ],
        emailRules: [
            v => !!v || 'Ingrese un correo',
            v => /.+@.+\..+/.test(v) || 'El correo debe ser válido',
        ],
    }), 
    methods: {
        loginForm() {
            Firebase.auth()
            .signInWithEmailAndPassword(this.form.email, this.form.password)
            .then((response) => {
                this.$store.dispatch("session/setCurrentUser", {
                    email: response.user.email,
                });
                this.$router.push("/");
                this.dialog = false;
            })
            .catch(() => {
                alert("Correo o contraseña incorrectos, intente nuevamente.");
            });            
        },
    },
}
</script>

<style>

</style>
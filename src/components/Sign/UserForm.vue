<template>
    <div>
    <v-form>
        <v-card-title>Iniciar Sesión</v-card-title>
        <v-text-field outlined label="Correo electrónico"></v-text-field>
        <v-text-field outlined label="Contraseña"></v-text-field>
        <v-radio-group v-model="radioGroup">
            <v-radio 
            label="Cliente"
            ></v-radio>
            <v-radio
            label="Admin"
            ></v-radio>
        </v-radio-group>
        </v-form>
        <br>
        <v-row align="center" justify="space-around">
            <v-btn color="success" type="submit">Entrar</v-btn>
            <v-spacer></v-spacer>
            <Form />
        </v-row>        
      
    </div>
</template>

<script>
export default {
    components: { 
        Form: () => import("../Sign/Form.vue"), 
    },
};
</script>

<style>

</style>
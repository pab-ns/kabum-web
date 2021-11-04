<template>
<v-dialog v-model="dialog" width="500">
    <template #activator="{ on }">
    <v-btn text v-on="on" color="primary">Crear Cuenta</v-btn>
    </template>
    <v-card> 
        <v-card-text>
        <v-form>
        <v-card-title>Crear Cuenta</v-card-title>
        <v-text-field outlined label="Nombre"></v-text-field>
        <v-text-field outlined label="Apellido"></v-text-field>
        <v-text-field outlined label="Correo electrónico"></v-text-field>
        <v-text-field outlined label="Contraseña"></v-text-field>
        <v-text-field outlined label="Repetir Contraseña"></v-text-field>
        <v-btn color="success" type="submit">Crear</v-btn>
        </v-form>
        </v-card-text>
    </v-card>
</v-dialog>   
</template>


<script>
export default {
    data: () => ({
        dialog: false,
    })    
}
</script>

<style>

</style>
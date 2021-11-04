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
            <UserForm />
        </v-card-text>
        
    </v-card>
</v-dialog>
</template>

<script>

export default {
    components: { UserForm: () => import("../Sign/UserForm.vue") },
    data: () => ({
        dialog: false,
    }), 
    
}
</script>

<style>

</style>
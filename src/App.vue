<template>
  <v-app>
    <v-app-bar app dense>
      <v-toolbar-title>
        <v-btn to="/" class="mx-n5" x-large tile text>Music List</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch v-model="$vuetify.theme.dark" hide-details color="grey darken-1" label="Dark"></v-switch>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>

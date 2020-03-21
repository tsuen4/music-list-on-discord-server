<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        <router-link to="/" class="top-link">Music list</router-link>
      </v-toolbar-title>
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
.top-link {
  color: #fff;
  text-decoration: none;
}
</style>

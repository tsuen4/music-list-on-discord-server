<template>
  <v-app-bar dense bottom app>
    <v-spacer />

    <v-btn @click="toTop" icon>
      <v-icon>mdi-arrow-collapse-up</v-icon>
    </v-btn>

    <v-btn @click="toBottom" icon>
      <v-icon>mdi-arrow-collapse-down</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    toTop () {
      this.$vuetify.goTo('#top')
    },
    toBottom () {
      this.$vuetify.goTo('#bottom')
    },
    toYouTube () {
      this.$router.push({ path: `/${this.$route.params.guildId}/youtube` })
    },
    toSoundCloud () {
      this.$router.push({ path: `/${this.$route.params.guildId}/soundcloud` })
    }
  }
}
</script>

<style>
</style>

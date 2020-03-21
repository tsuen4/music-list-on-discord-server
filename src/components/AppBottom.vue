<template>
  <v-bottom-navigation app grow>
    <v-btn @click="toTop">
      <span>Top</span>
      <v-icon>mdi-arrow-collapse-up</v-icon>
    </v-btn>

    <v-btn @click="toBottom">
      <span>Bottom</span>
      <v-icon>mdi-arrow-collapse-down</v-icon>
    </v-btn>
  </v-bottom-navigation>
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

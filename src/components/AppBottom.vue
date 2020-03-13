<template>
  <v-bottom-navigation app grow color="teal">
    <v-btn @click="toYouTube">
      <span>YouTube</span>
      <v-icon>mdi-youtube</v-icon>
    </v-btn>

    <v-btn @click="toSoundCloud">
      <span>SoundCloud</span>
      <v-icon>mdi-soundcloud</v-icon>
    </v-btn>

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

<template>
  <v-container>
    <span id="top" />
    <p>{{ guildId }}: {{ service }}</p>
    <template v-for="(item, index) in listData">
      <!-- {{ item }} -->
      <MusicCard v-bind="item" :key="index" />
    </template>
    <span id="bottom" />
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'
import MusicCard from '@/components/MusicCard.vue'

export default {
  components: {
    MusicCard
  },
  props: {
    service: String,
    guildId: String
  },
  data () {
    return {
      listData: null
    }
  },
  watch: {
    service () {
      firebase.database().ref(`tracks/${this.guildId}`).on('value', snapshot => {
        this.listData = snapshot.val()
        this.loading = false
      })
    }
  },
  mounted () {
    firebase.database().ref(`tracks/${this.guildId}`).on('value', snapshot => {
      this.listData = snapshot.val()
    })
  },
  computed: {
    parseService () {
      if (this.service === 'soundcloud') {
        return 'SoundCloud'
      } else if (this.service === 'youtube') {
        return 'YouTube'
      }
      return ''
    }
  }
}
</script>

<style>
</style>

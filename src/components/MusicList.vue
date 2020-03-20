<template>
  <v-container>
    <span id="top" />
    <p>{{ guildId }}: {{ service }}</p>
    <v-card v-for="(item, index) in listData" :key="index" class="mx-auto ma-2">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="mb-1" v-text="item.title" />
          <v-list-item-subtitle v-text="item.uploader" />
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn :href="item.url" target="_blank" text small>OPEN</v-btn>
      </v-card-actions>
    </v-card>
    <span id="bottom" />
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'

export default {
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
      firebase.database().ref(`tracks/${this.guildId}/${this.service}`).on('value', snapshot => {
        this.listData = snapshot.val()
        this.loading = false
      })
    }
  },
  mounted () {
    firebase.database().ref(`tracks/${this.guildId}/${this.service}`).on('value', snapshot => {
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

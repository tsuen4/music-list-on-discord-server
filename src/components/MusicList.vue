<template>
  <v-container>
    <span id="top" />
    <template v-for="(item, index) in listData">
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
  mounted () {
    firebase.database().ref(`tracks/${this.guildId}`).on('value', snapshot => {
      this.listData = snapshot.val()
    })
  },
  computed: {
  }
}
</script>

<style>
</style>

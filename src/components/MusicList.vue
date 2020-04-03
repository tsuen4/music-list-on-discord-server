<template>
  <v-container>
    <span id="top" />
    <template v-for="item in listData">
      <MusicCard v-bind="item" :key="item.time && item.url" />
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
      getData: null
    }
  },
  mounted () {
    firebase.database().ref(`tracks/${this.guildId}`).on('value', snapshot => {
      this.getData = snapshot.val()
    })
  },
  computed: {
    listData () {
      const list = []
      for (const el in this.getData) {
        // console.dir(this.getData[el])
        list.push(this.getData[el])
      }
      return list.reverse()
    }
  }
}
</script>

<style>
</style>

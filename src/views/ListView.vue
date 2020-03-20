<template>
  <div class="list-view">
    <MusicList :service="service" :guildId="guildId" />
    <AppBottom />
  </div>
</template>

<script>
import MusicList from '@/components/MusicList.vue'
import AppBottom from '@/components/AppBottom.vue'
import firebase from 'firebase/app'
import 'firebase/database'

export default {
  components: {
    AppBottom,
    MusicList
  },
  data () {
    return {
      listData: null,
      service: this.$route.params.service,
      guildId: this.$route.params.guildId
    }
  },
  mounted () {
    firebase.database().ref(`tracks/${this.guildId}/${this.service}`).on('value', snapshot => {
      this.listData = snapshot.val()
    })
  },
  methods: {
    test () {
      // if ()
      // this.guildId
    }
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
  },
  beforeRouteUpdate (to, from, next) {
    this.service = to.params.service
    next()
  }
}
</script>

<style>
</style>

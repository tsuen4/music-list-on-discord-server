<template>
  <div class="list-collection">
    <p>{{ $route.params.guildId }}</p>
    {{ listData }}
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'

export default {
  data () {
    return {
      listData: null,
      switchService: 'youtube'
    }
  },
  mounted () {
    firebase.database().ref(`tracks/${this.$route.params.guildId}`).on('value', snapshot => {
      this.listData = snapshot.val()
    })
  }
}
</script>

<style>
</style>

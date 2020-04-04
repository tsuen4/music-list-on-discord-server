<template>
  <div class="list-view">
    <MusicList :guildId="guildId" :desc="desc" />
    <AppBottom @desc="desc = !desc" />
  </div>
</template>

<script>
import MusicList from '@/components/MusicList.vue'
import AppBottom from '@/components/AppBottom.vue'

export default {
  components: {
    AppBottom,
    MusicList
  },
  data () {
    return {
      listData: null,
      guildId: this.$route.params.guildId,
      desc: true
    }
  },
  mounted () {
  },
  methods: {
  },
  beforeRouteUpdate (to, from, next) {
    this.service = to.params.service
    next()
  }
}
</script>

<style>
</style>

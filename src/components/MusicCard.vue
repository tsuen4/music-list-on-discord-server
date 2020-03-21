<template>
  <v-card class="mx-auto ma-2">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="mt-n1" v-text="title" />
        <!-- <v-card-subtitle v-text="author" /> -->
        <v-card-actions>
          <v-btn :href="url" target="_blank" class="mt-n3" text small>Open {{ parseService }}</v-btn>
        </v-card-actions>
      </div>

      <v-avatar class size="92" tile>
        <v-img :src="thumbnail" />
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    url: String,
    service: String,
    time: Number
  },
  data () {
    return {
      title: '',
      author: '',
      src: '',
      thumbnail: ''
    }
  },
  mounted () {
    axios.post('/api/get-info', {
      url: this.url,
      service: this.service
    })
      .then(res => {
        const data = res.data
        // console.log(data)
        this.title = data.title
        this.author = data.author_name
        this.src = data.html
        this.thumbnail = data.thumbnail_url
      })
      .catch(error => console.error('Error: ', error))
  },
  computed: {
    date () {
      return (new Date(this.time)).toLocaleDateString()
    },
    parseService () {
      if (this.service === 'soundcloud') {
        return 'SoundCloud'
      } else if (this.service === 'youtube') {
        return 'YouTube'
      } else if (this.service === 'spotify') {
        return 'Spotify'
      }
      return ''
    }
  }
}
</script>

<style>
</style>

<template>
  <v-card class="mx-auto ma-2">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="mt-n1" v-text="title" />
        <!-- <v-card-subtitle v-text="author" /> -->
      </div>

      <v-avatar size="92" tile>
        <v-img :src="thumbnail" />
      </v-avatar>
    </div>
    <v-card-actions>
      <v-btn :href="url" target="_blank" class="mt-n3" text small>
        <v-icon left>{{ serviceIcon }}</v-icon>
        {{ parseService }}
      </v-btn>

      <v-spacer />

      <v-btn icon @click="show = !show" small>
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider />

        <v-list dense>
          <v-list-item :href="`https://www.google.com/search?q=${title}`" target="_blank">
            <v-list-item-icon>
              <v-icon>mdi-search-web</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Search: '{{ title }}'</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- <v-list-item @click="remove">
            <v-list-item-icon>
              <v-icon>mdi-delete</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Delete this item</v-list-item-title>
            </v-list-item-content>
          </v-list-item>-->
        </v-list>
      </div>
    </v-expand-transition>

    <v-snackbar v-model="removedSnackbar">
      Deleted {{ title }}
      <v-btn color="red" text @click="removedSnackbar = false">Close</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import axios from 'axios'
// import firebase from 'firebase/app'
// import 'firebase/database'

export default {
  props: {
    index: String,
    url: String,
    service: String,
    time: Number
  },
  data () {
    return {
      title: '',
      author: '',
      src: '',
      thumbnail: '',
      show: false,
      removedSnackbar: false
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
      } else if (this.service === 'bandcamp') {
        return 'Bandcamp'
      } else if (this.service === 'beatport') {
        return 'Beatport'
      } else if (this.service === 'applemusic') {
        return 'Apple Music'
      }
      return ''
    },
    serviceIcon () {
      if (this.service === 'soundcloud') {
        return 'mdi-soundcloud'
      } else if (this.service === 'youtube') {
        return 'mdi-youtube'
      } else if (this.service === 'spotify') {
        return 'mdi-spotify'
      } else if (this.service === 'bandcamp') {
        return 'mdi-bandcamp'
      } else if (this.service === 'beatport') {
        return 'mdi-open-in-new'
      } else if (this.service === 'applemusic') {
        return 'mdi-open-in-new'
      }
      return ''
    }
  },
  methods: {
    // remove () {
    //   firebase.database().ref(this.index).remove()
    //     .then(() => { this.removedSnackbar = true })
    // }
  }
}
</script>

<style>
</style>

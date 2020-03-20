<template>
  <v-card class="mx-auto ma-2">
    {{ service }}
    {{ time }}
    {{ url }}
    <!-- {{ item.url }} -->
    <v-list-item>
      <v-list-item-content>
        <!-- <v-list-item-title class="mb-1" v-text="item.title" /> -->
        <!-- <v-list-item-subtitle v-text="item.uploader" /> -->
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn :href="url" target="_blank" text small>OPEN</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    url: String,
    service: String,
    time: Number
  },
  data () {
    return {
      test: 'https://www.youtube.com/watch?v=uUvthLpSHrQ&feature=youtu.be'
    }
  },
  mounted () {

  }
}
</script>

<style>
</style>

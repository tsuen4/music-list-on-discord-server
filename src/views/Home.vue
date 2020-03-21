<template>
  <v-container>
    <v-text-field :rules="rules" v-model="guildId" v-on:keyup.enter="nextLink"></v-text-field>
    <v-radio-group v-model="service" row>
      <v-radio label="YouTube" value="youtube"></v-radio>
      <v-radio label="SoundCloud" value="soundcloud"></v-radio>
    </v-radio-group>
    <v-btn block @click="nextLink">GO</v-btn>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      guildId: '',
      service: 'youtube',
      rules: [
        value => {
          const pattern = /\d+/
          return pattern.test(value) || 'Invalid guild-id.'
        }
      ]
    }
  },
  methods: {
    nextLink () {
      this.$router.push(`${this.guildId}/${this.service}`)
    }
  }
}
</script>

<template>
  <v-container>
    <v-text-field :rules="rules" v-model="guildId" v-on:keyup.enter="nextLink"></v-text-field>
    <v-btn block @click="nextLink">GO</v-btn>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      guildId: '',
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
      this.$router.push(`${this.guildId}`)
    }
  }
}
</script>

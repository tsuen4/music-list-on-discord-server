import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase/app'
import 'firebase/database'
import vuetify from './plugins/vuetify'

const firebaseConfig = {
  apiKey: 'AIzaSyAIByc34FDw8E8zqlyRRc7ZwuOoYmLWCXE',
  authDomain: 'music-list-on-discord-server.firebaseapp.com',
  databaseURL: 'https://music-list-on-discord-server.firebaseio.com',
  storageBucket: 'music-list-on-discord-server.appspot.com'
}

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

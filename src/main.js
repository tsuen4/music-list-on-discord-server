import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import * as firebase from 'firebase'
import 'firebase/database'
import vuetify from './plugins/vuetify'

const firebaseConfig = {
  apiKey: 'AIzaSyAIv7Vf474NWqeWFoE4ffAb6OIEoPyGdEg',
  authDomain: 'music-info-collection-bot.firebaseapp.com',
  databaseURL: 'https://music-info-collection-bot.firebaseio.com',
  // projectId: 'music-info-collection-bot',
  storageBucket: 'music-info-collection-bot.appspot.com'
  // messagingSenderId: '1020277248178',
  // appId: '1:1020277248178:web:8818e559ecd101e758f9ab',
  // measurementId: 'G-KEHSD8C8T2'
}

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

/* eslint-disable eol-last */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/services/store'
import './registerServiceWorker'
import firebase from 'firebase/app'
import config from '@/services/firebase'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/application.css'

import i18n from '@/i18n'

firebase.initializeApp(config)
Vue.config.productionTip = false

let app

if (!app) {
  app = new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

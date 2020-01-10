import { defineCustomElements } from '@ionic/pwa-elements/loader'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './registerServiceWorker'

import './assets/styles/index.scss'

Vue.config.productionTip = false

/**
 * TODO
 * 1. Contrução do Banco local e Verificação das Restrições do APP Cliente
 */

console.log('LOADING MAIN')

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')

defineCustomElements(window)

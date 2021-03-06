import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import VueSVGIcon from 'vue-svgicon'
import yandexMap from 'vue-yandex-maps'

import './styles/app.scss'

sync(store, router)

Vue.use(yandexMap)

Vue.use(VueSVGIcon)

Vue.config.productionTip = false 

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '@/store/index.js'

Vue.use(ElementUI)
Vue.config.productionTip = false

import axios from 'axios'
axios.defaults.headers.get["Content-type"]="application/json"
// axios.defaults.baseURL = '/'
Vue.prototype.$axios = axios

import qs from 'qs'
Vue.prototype.$qs = qs

Vue.prototype.$store = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

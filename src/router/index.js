import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/Header'
import Loging from '../components/Loging'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Header',
      component:Header
    },
    {
      path: '/',
      component:Loging
    }
  ]
})
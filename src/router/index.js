import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      component: () => import("@/views/home/index")
    },
    {
      path: '/',
      component: () => import("@/views/login/index")
    },
    // {
    //   path: '/header',
    //   component: () => import("@/components/Header")
    // }
  ]
})

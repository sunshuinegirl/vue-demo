import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

import login from '@/components/pages/login'//登陆页面

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

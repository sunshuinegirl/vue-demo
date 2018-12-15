import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

import login from '@/components/pages/login'//登陆页面

Vue.use(Router)

let router =  new Router({
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


router.beforeEach((to,from,next)=>{
  console.log('to:'+to.path);
  if(to.path === '/' || to.path === '/login'){
    next()
  }
})

export default router
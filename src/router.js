/* eslint-disable eol-last */

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Dasboard from './views/Dasboard.vue'
import Login from './views/Login.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresGuest: false
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/dasboard',
      name: 'dasboard',
      component: Dasboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    }
  ]
})

// ========================== Nav Guard ==========================
var TOKEN = localStorage.getItem('currentToken')

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!TOKEN) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (TOKEN) {
      next({
        path: '/dasboard',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
/* eslint-disable eol-last */

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Dasboard from './views/Dasboard.vue'
import Login from './views/Login.vue'
import firebase from 'firebase/app'
require('firebase/auth')

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
        requiresGuest: true
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
router.beforeEach((to, from, next) => {
  // store.state.currentUser

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // check if user exist
    if (!firebase.auth().currentUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proced to de router
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // check if user exist
    if (firebase.auth().currentUser) {
      next({
        path: '/dasboard',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proced to de router
      next()
    }
  } else {
    // Proced to de router
    next()
  }
})

export default router
/* eslint-disable eol-last */

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dasboard from './views/Dasboard.vue'
import Login from './views/Login.vue'
import Vacancies from './components/Vacancy'
import VacancyShow from './components/Vacancy/Show'
import VacancyEdit from './components/Vacancy/Edit'
import VacancyNew from './components/Vacancy/New'


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
      path: '/vacancies',
      name: 'vacancies',
      component: Vacancies,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/vacancies/show', 
      name: 'vacancy',
      component: VacancyShow,  
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/vacancies/new', 
      name: 'vacancy-new',
      component: VacancyNew,  
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/vacancies/edit', 
      name: 'vacancy-edit',
      component: VacancyEdit,  
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
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('currentToken')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (localStorage.getItem('currentToken')) {
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
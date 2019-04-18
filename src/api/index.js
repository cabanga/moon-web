/* eslint func-call-spacing: ["error", "never"] */
/* eslint function-paren-newline: ["error", "multiline"] */
/* eslint-disable */
import Axios from 'axios'
import firebase from 'firebase/app'
require('firebase/auth')
import { setToken, setCurrentUser } from '../api/session'

// const BASE_URL = process.env.API_URL || 'http://localhost:3000'
// const BASE_URL = process.env.API_URL || 'https://moon--api.herokuapp.com'
// https://moon--api.herokuapp.com/api/v1/vacancies



const apiClient = Axios.create({
//  baseURL: 'http://localhost:3000',
  baseURL: 'https://moon--api.herokuapp.com/api/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// ================================== LOGIN =================================
export function signIn (creandials) {
  return new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(creandials.email, creandials.password)
    .then(res => {
      firebase.auth().currentUser.getIdToken()
      .then(currentToken => {
        setCurrentUser (res.user)
        setToken(currentToken)
        resolve(currentToken)
      })
      // store.commit('setCurrentUser', firebase.auth().currentUser);
    })
    .catch(error => {
      reject(error.message)
    })
  })
}

// ============================= FACEBOOK PROVIDER ===========================
export function facebookAutProvider () {
  return new Promise((resolve, reject) => {
    var provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(res => {
      var token = res.credential.accessToken
      setCurrentUser (res.user)
      setToken(token)
      resolve(token)
    }).catch(error => {
      reject(error.message)
    })
  })
}

// ============================= DESTROY SESSION ===========================
export function signOut () {
  return new Promise((resolve, reject) => {
    firebase.auth().signOut()
    .then(() => {
      localStorage.removeItem('currentToken')
      localStorage.removeItem('currentUser')
      localStorage.removeItem('currentUserId')
      console.log('User successfull sigout !!!')
      resolve(true)
    }).catch(error => {
      reject(error.message)
    })
  })
}

// ============================== GET VACANCY =============================
export function postVacancy (vacancy) {
  return new Promise((resolve, reject) => {
    apiClient.post('/vacancies',{
      title: vacancy.title, 
      category: vacancy.category, 
      level: vacancy.level,
      companyName: vacancy.companyName, 
      location: vacancy.location, 
      salary: vacancy.salary, 
      description: vacancy.description, 
      responsibilities: vacancy.responsibilities, 
      requirements: vacancy.requirements, 
      city: vacancy.city, 
      user_id: localStorage.getItem('currentUserId')
    })
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      console.log("error to get vacancy");
      reject(error)
    })
  })
}

// ============================== GET VACANCIES =============================
export function getVacancies () {
  return new Promise((resolve, reject) => {
    apiClient.get('/vacancies')
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      console.log("error to get vacancies");
      reject(error.message)
    })
  })
}

// ============================== GET VACANCY =============================
export function getVacancy (id) {
  return new Promise((resolve, reject) => {
    apiClient.get('/vacancies/' + id)
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      console.log("error to get vacancy");
      reject(error.message)
    })
  })
}

// ============================== GET 3 LASTS VACANCIES =============================
export function getLastVacancies () {
  return new Promise((resolve, reject) => {
    apiClient.get('/vacancies_lasts')
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      console.log("error to get vacancies");
      reject(error.message)
    })
  })
}

// ============================== GET MY VACANCIES =============================
export function getMyVacancies () {
  var myId = localStorage.getItem('currentUserId')
  return new Promise((resolve, reject) => {
    apiClient.get('/vacancies_uid/'+myId)
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      console.log("error to get vacancies");
      reject(error.message)
    })
  })
}
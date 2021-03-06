/* eslint func-call-spacing: ["error", "never"] */
/* eslint function-paren-newline: ["error", "multiline"] */
/* eslint-disable */
import Axios from 'axios'
import firebase from 'firebase/app'
require('firebase/auth')
import { setToken, setCurrentUser } from '../api/session'

// const BASE_URL = process.env.API_URL || 'http://localhost:3000'
const BASE_URL = process.env.API_URL || 'https://moon--api.herokuapp.com/api/v1'

const apiClient = Axios.create({
  baseURL: 'https://moon--api.herokuapp.com/api/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})


// =======================================================================================
export function signUp(creandials) {
  return new Promise((resolve, reject) => {

    firebase.auth().createUserWithEmailAndPassword(creandials.email, creandials.password)
    .then(res => {
      this.$store.commit('setCurrentUser', firebase.auth().currentUser);
      store.commit('setCurrentUser', firebase.auth().currentUser);
      resolve(res.user);
    })
    .catch( error => {
      reject(error.message);
    });
  })
}

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

// ============================== POST VACANCY =============================
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
      city: vacancy.city,
      skills: vacancy.skills,
      bonus: vacancy.bonus,
      user_id: localStorage.getItem('currentUserId')
    })
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      console.log('error to post vacancy')
      reject(error)
    })
  })
}

// ============================== PATCH VACANCY =============================
export function patchVacancy (vacancy, id) {
  return new Promise((resolve, reject) => {
    var data = {
      title: vacancy.title,
      category: vacancy.category,
      level: vacancy.level,
      companyName: vacancy.companyName,
      location: vacancy.location,
      salary: vacancy.salary,
      description: vacancy.description,
      city: vacancy.city,
      skills: vacancy.skills,
      bonus: vacancy.bonus,
      contact_email: vacancy.contact_email,
      contact_phone: vacancy.contact_phone,
      user_id: localStorage.getItem('currentUserId')
    }
    Axios({
      method:'PATCH',
      url: `${BASE_URL}/vacancies/${id}`,
      data: data
    })
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      console.log('error to patch vacancy')
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
      console.log('error to get vacancies')
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
      console.log('error to get vacancy')
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
      console.log('error to get vacancies')
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
      console.log('error to get vacancies')
      reject(error.message)
    })
  })
}

// ============================== CLOSE VACANCY =============================
export function closeVacancy (id) {
  return new Promise((resolve, reject) => {
    Axios({
      method:'PATCH',
      url: `${BASE_URL}/vacancies/close_vacancy/${id}`
    })
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      console.log('error to get vacancy')
      reject(error)
    })
  })
}

// ============================== APPLY CANDIDATE =============================
export function applyCandidate (id) {
  return new Promise((resolve, reject) => {
    Axios({
      method:'POST',
      url: `${BASE_URL}/candidates`,
      data: {
        vacancy_id: id,
        user_id: localStorage.getItem('currentUserId')
      }
    })
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      console.log('error to post candidate')
      reject(error)
    })
  })
}

// ============================== CLOSE VACANCY =============================
export function alreadyApplied (id) {
  return new Promise((resolve, reject) => {
    Axios({
      method:'GET',
      url: `${BASE_URL}/vacancy/${id}/${localStorage.getItem('currentUserId')}`
    })
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      console.log('error to get vacancy')
      reject(error)
    })
  })
}

/* eslint func-call-spacing: ["error", "never"] */
/* eslint function-paren-newline: ["error", "multiline"] */
/* eslint-disable */
// global localStorage
import Axios from 'axios'
import firebase from 'firebase/app'
require('firebase/auth')
import { setToken } from '../api/session'

const BASE_URL = process.env.API_URL || 'https://moon--api.herokuapp.com'
// https://moon--api.herokuapp.com/api/v1/vacancies

// ============================== GET VACANCIES =============================
export function getVacancies () {
  return new Promise((resolve, reject) => {
    Axios.get(`${BASE_URL}/api/v1/vacancies`)
    .then(response => {
      console.log("success full connection");
      resolve(response.data)
    })
    .catch(error => {
      console.log("error to get vacancies");
      reject(error.message)
    })
  })
}

// ================================== LOGIN =================================
export function signIn (creandials) {
  return new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(creandials.email, creandials.password)
    .then(res => {
      firebase.auth().currentUser.getIdToken()
      .then(currentToken => {
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
      // var user = res.user
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
      
      console.log('remove currentToken !!!')
      resolve(true)
    }).catch(error => {
      reject(error.message)
    })
  })
}
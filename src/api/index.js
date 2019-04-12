/* eslint func-call-spacing: ["error", "never"] */
/* eslint function-paren-newline: ["error", "multiline"] */
// global localStorage
// import Axios from 'axios'
import firebase from 'firebase/app'
require('firebase/auth')

// const BASE_URL = process.env.API_URL || 'https://moon--api.herokuapp.com'
// https://moon--api.herokuapp.com/api/v1/vacancies

// ================================== LOGIN =================================

export function signIn (creandials) {
  return new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(creandials.email, creandials.password)
    .then(res => {
      firebase.auth().currentUser.getIdToken()
      .then(currentToken => resolve(currentToken))
      // store.commit('setCurrentUser', firebase.auth().currentUser);
    })
    .catch(error => {
      reject(error.message)
    })
  })
}

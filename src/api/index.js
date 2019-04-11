/* global localStorage */
import Axios from 'axios'
import firebase from 'firebase/app'
require('firebase/auth')

const BASE_URL = process.env.API_URL || 'https://moon--api.herokuapp.com'
// https://moon--api.herokuapp.com/api/v1/vacancies

// ================================== LOGIN =========================================
export function signIn(creandials) {
  return new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(creandials.email, creandials.password)
    .then(res => {
      //store.commit('setCurrentUser', firebase.auth().currentUser);
      resolve(res.user)
    })
    .catch( error => {
      reject(error.message)
    })
  })
}

// ================================== REGISTER ======================================
export function signUp(creandials) {
  return new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(creandials.email, creandials.password)
    .then(res => {
      //this.$store.commit('setCurrentUser', firebase.auth().currentUser);
      //store.commit('setCurrentUser', firebase.auth().currentUser);
      resolve(res.user)
    })
    .catch( error => {
      reject(error.message)
    });
  })
}

// ================================== DESTROY SESSION ===============================
export function signOut() {
  return new Promise((resolve, reject) => {
    firebase.auth().signOut()
    .then(() => {
      //store.commit('setCurrentUser', null);
      resolve(true);
    })
    .catch( error => {
      reject(error.message);
    });
  })
}
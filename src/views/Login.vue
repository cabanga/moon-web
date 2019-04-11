<template>
  <div class="container">

    <form class="form-signin" @submit.prevent="login">
      <h1 class="h3 mb-3 font-weight-normal text-center">Please sign in</h1>

      <br>

      <div class="alert alert-danger" v-if="error">
        <span>{{error}}</span>
      </div>

      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
      <br>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
      
      <br>
      <button type="submit" class="btn btnSubmit-login btn-sm ">Sign in</button>
      <br>
      <br>
      <router-link class="btn btnSubmit-login-out btn-sm" to="/register">Sign out</router-link>
      <br>
      <br>
      
      <h5 class="text-center font-weight-normal">Or</h5>
      <button type="submit" class="btn btnSubmit-login btn-sm btn-facebook"> Facebook Sign in</button>
      

    </form>


  </div>
</template>


<script>
  import { signIn } from '../api'
  import '@/assets/css/login.css'

//  import store from '@/services/store';

  export default {
    name: 'Login',
    computed: {
      currentUser(){
        return this.$store.state.currentUser
      }
    },
    data () {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      login() {
        const creandials = {login: this.email, password: this.password}
       
        signIn(creandials)
        .then( user =>{
          console.log(user);
          //this.$store.state.currentUser = user;
          this.$router.push('/dasboard');
        })
        .catch( error =>{
          this.error = error,
          store.commit('setError', error);
        })

      }
    }
  }
</script>

<style scoped>
  .form-control{
    border-radius: 50px;
  }
</style>

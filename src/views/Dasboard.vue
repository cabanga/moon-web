<template>
  <div class="about">
    <button v-on:click="logOut" class="list-group-item list-group-item-action bg-light">Logout</button>

    <h1>This is an Dasboard page</h1>
    <h2>Lord {{ userName }}</h2>
  </div>
</template>

<script>
  /* eslint-disable */
  // eslint-disable-next-line

  import { signOut } from '@/api';

  export default {
    computed: {
      userName(){
        return this.$store.state.user.name
      }
    },
    methods: {
      logOut() {       
        signOut()
        .then(() => {
          this.$router.push('/')
        })
      }
    }
  }
</script>
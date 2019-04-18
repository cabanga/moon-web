<template>
  <div id="app" :class="{'bg': isBlack}">
    <NavBar v-if="['home', 'vacancies', 'login', 'vacancy'].indexOf($route.name) > -1" />
    <NavBarLogged v-else />
    <router-view/>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import NavBarLogged from '@/components/NavBarLogged.vue'

  export default {
    components: {
      NavBar,
      NavBarLogged
    },
    computed: {
      isBlack: function () {
        return this.$route.name === 'login'
      }
    }
  }
</script>

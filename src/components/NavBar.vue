<template>
  <div class="mg-nav">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img width="50" alt="Vue logo" src="../assets/images/icon.png">
        </router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" :to="{name: 'home'}">Home <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'vacancies'}">{{ $t('vacancies') }}</router-link>
            </li>
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link btn btnGetStarted btn-sm btn-get-start" to="/register">Fazer registro</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'login'}">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
  .mg-nav{
    margin-bottom: 3%;
  }
</style>

<template>
    <form @submit.prevent="createVacancy">
      <div class="row">

        <div class="col">
          
          <div class="form-group">
            <label for="inputTitle">{{ $t('titleVacancy') }}</label>
            <input v-model="title" type="" id="inputTitle" class="form-control" placeholder="Title" required="" autofocus="">
          </div>

          <div class="form-group">
            <label for="inputSalary">{{ $t('salary') }}</label>
            <input v-model="salary" type="" id="inputSalary" class="form-control" placeholder="salary" required="">
          </div>

        </div>

        <div class="col">
          <div class="form-group">
            <label for="inputCompany">{{ $t('company') }}</label>
            <input v-model="salary" type="" id="inputCompany" class="form-control" placeholder="company" required="">
          </div>

        </div>

      </div>
    </form>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        title: '',
        salary: ''
      }
    },

    methods: {
      createVacancy() {
        // const creandials = {email: this.email, password: this.password}
      }
    }

  }
</script>
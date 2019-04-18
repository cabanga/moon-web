<template>
    <form @submit.prevent="createVacancy">
      <div class="row">

        <div class="col-sm-12 col-md-6">
          <div class="form-group">
            <label for="inputTitle">{{ $t('titleVacancy') }}</label>
            <input v-model="title" type="text" id="inputTitle" class="form-control" placeholder="Title" required="" autofocus="">
          </div>

          <div class="form-group">
            <label for="inputCategory">{{ $t('level') }}</label>
            <select v-model="level" class="form-control" id="inputCategory">
              <option v-for="le in optins_level()" :key="le.id" v-bind:value="le.id">{{ le.kind }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="inputLocation">{{ $t('location') }}</label>
            <input v-model="location" type="text" id="inputLocation" class="form-control" placeholder="Localização ou endereço" required="">
          </div>

        </div>

        <div class="col-sm-12 col-md-6">
          <div class="form-group">
            <label for="inputSalary">{{ $t('salary') }}</label>
            <input v-model="salary" type="number" id="inputSalary" class="form-control" placeholder="Valor do salário">
          </div>

          <div class="form-group">
            <label for="inputCompanyName">{{ $t('companyName') }}</label>
            <input v-model="companyName" type="text" id="inputCompanyName" class="form-control" placeholder="Nome da empresa" required="">
          </div>

          <div class="form-group">
            <label for="inputCategory">{{ $t('category') }}</label>
            <select v-model="category" class="form-control" id="inputCategory">
              <option v-for="le in optins_jobs()" :key="le.id" v-bind:value="le.id">{{ le.kind }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="inputCity">{{ $t('city') }}</label>
            <input v-model="city" type="text" id="inputCity" class="form-control" placeholder="Cidade" required="">
          </div>

        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="form-group">
            <label for="inputDescription">{{ $t('description') }}</label>
            <input v-model="description" type="text" id="inputDescription" class="form-control" placeholder="Descrição da vaga">
          </div>
        </div>

        <div class="col-sm-12">
          <div class="form-group">
            <label for="inputResponsibilities">{{ $t('responsibilities') }}</label>
            <input v-model="responsibilities" type="text" id="inputResponsibilities" class="form-control" placeholder="Responsabilidades">
          </div>
        </div>

        <div class="col-sm-12">
          <div class="form-group">
            <label for="inputRequirements">{{ $t('requirements') }}</label>
            <input v-model="requirements" type="text" id="inputRequirements" class="form-control" placeholder="Requisitos">
          </div>
        </div>

      </div>

      <div class="row">
        <div class="col">
          <hr>
          <button type="submit" class="btn btn-success btn-lg btn-submit">{{ $t('registerVacancy') }}</button>

        </div>
      </div>
      <br>
      <br>
      <br>
  </form>
</template>

<script>
  import { optionsLevel, optionsJobs } from '@/controllers'
  import { postVacancy } from '@/api'

  export default {
    name: 'Form',
    data () {
      return {
        title: null,
        category: null,
        level: null,
        companyName: '',
        location: '',
        salary: null,
        description: null,
        responsibilities: null,
        requirements: null,
        city: null,
        skills: ''
      }
    },

    methods: {
      optins_level () {
        return optionsLevel()
      },
      optins_jobs () {
        return optionsJobs()
      },
      createVacancy () {
        console.log('submit form')
        const vacancy =
          {
            title: this.title,
            category: this.category,
            level: this.level,
            companyName: this.companyName,
            location: this.location,
            salary: this.salary,
            description: this.description,
            responsibilities: this.responsibilities,
            requirements: this.requirements,
            city: this.city
          }
        postVacancy(vacancy)
          .then(response => {
            console.log('Post vacancy : ', response)
            this.$router.go('/dasboard')
          })
          .catch(error => {
            console.log('error to post vacancy : ', error)
          })
      }
    }

  }
</script>

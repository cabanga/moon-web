<template>
    <div class="">
      <div class="bg-vacancies">
        <div class="container container-home">
          <br>
          <h2 class="text-center text-title under-text">{{$t('editVacancy')}}</h2>
        </div>
      </div>

      <div class="container m15">
        <form @submit.prevent="updateVacancy">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="form-group">
                <label for="inputTitle">{{ $t('titleVacancy') }}</label>
                <input v-model="vacancy.title" type="text" id="inputTitle" class="form-control" placeholder="Title" required="" autofocus="">
              </div>

              <div class="form-group">
                <label for="inputContactEmail">{{ $t('contact_email') }}</label>
                <input v-model="vacancy.contact_email" type="email" id="inputContactEmail" class="form-control" placeholder="Email para responder" required="">
              </div>

              <div class="form-group">
                <label for="inputCategory">{{ $t('level') }}</label>
                <select v-model="vacancy.level" class="form-control" id="inputCategory">
                  <option v-for="le in optins_level()" :key="le.id" v-bind:value="le.id">{{ le.kind }}</option>
                </select>
              </div>

              <div class="form-group">
                <label for="inputLocation">{{ $t('location') }}</label>
                <input v-model="vacancy.location" type="text" id="inputLocation" class="form-control" placeholder="Localização ou endereço" required="">
              </div>

              <div class="form-group">
                <label for="inputSkills">{{ $t('skills') }} (Separa as competências com virgulas)</label>
                <input v-model="vacancy.skills" type="text" id="inputSkills" class="form-control" placeholder="ex: Boostrap, Rails, PHP, Laravel ...">
              </div>

            </div>

            <div class="col-sm-12 col-md-6">
              <div class="form-group">
                <label for="inputSalary">{{ $t('salary') }}</label>
                <input v-model="vacancy.salary" type="number" id="inputSalary" class="form-control" placeholder="Valor do salário">
              </div>

              <div class="form-group">
                <label for="inputContactPhone">{{ $t('contact_phone') }}</label>
                <input v-model="vacancy.contact_phone" type="text" id="inputContactPhone" class="form-control" placeholder="Telemóvel ou telefone" required="">
              </div>

              <div class="form-group">
                <label for="inputCompanyName">{{ $t('companyName') }}</label>
                <input v-model="vacancy.companyName" type="text" id="inputCompanyName" class="form-control" placeholder="Nome da empresa" required="">
              </div>

              <div class="form-group">
                <label for="inputCategory">{{ $t('category') }}</label>
                <select v-model="vacancy.category" class="form-control" id="inputCategory">
                  <option v-for="le in optins_jobs()" :key="le.id" v-bind:value="le.id">{{ le.kind }}</option>
                </select>
              </div>

              <div class="form-group">
                <label for="inputCity">{{ $t('city') }}</label>
                <input v-model="vacancy.city" type="text" id="inputCity" class="form-control" placeholder="Cidade" required="">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                <label for="inputDescription">{{ $t('description') }}</label>
                <VueTrix inputId="inputDescription" v-model="vacancy.description" placeholder="Descrição da vaga"/>
              </div>
            </div>

            <div class="col-sm-12">
              <div class="form-group">
                <label for="inputBonus">{{ $t('bonus') }} - Outros Beneficios</label>
                <VueTrix inputId="inputBonus" v-model="vacancy.bonus" placeholder="O que voçes oferecem ?"/>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <hr>
              <button type="submit" class="btn btn-success btn-lg btn-submit">{{ $t('updateVacancy') }}</button>
              <router-link class="btn btn-cancel btn-lg btn-submit" :to="{name: 'dashboard'}">Cancelar</router-link>
            </div>
          </div>

          <br>
          <br>
          <br>
        </form>

      </div>
    </div>
</template>

<script>
  import { optionsLevel, optionsJobs } from '@/controllers'
  import { getVacancy, patchVacancy } from '@/api'
  import VueTrix from 'vue-trix'

  export default {
    name: 'edit-vacancy',
    props: ['id'],
    components: {
      VueTrix
    },
    data () {
      return {
        vacancy: {}
      }
    },
    created () {
      getVacancy(this.id)
        .then(vc => {
          this.vacancy = vc
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods: {
      optins_level () {
        return optionsLevel()
      },
      optins_jobs () {
        return optionsJobs()
      },
      updateVacancy () {
        patchVacancy(this.vacancy, this.id)
          .then(response => {
            this.$router.push('/dashboard')
          })
          .catch(error => {
            console.log('error to post vacancy : ', error)
          })
      }
    }
  }
</script>

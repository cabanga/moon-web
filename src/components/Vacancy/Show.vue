<template>
    <div class="">

      <div class="bg-vacancies">
        <div class="container container-home">
          <br>
          <h2 class="text-center text-title under-text">{{vacancy.title}}</h2>
        </div>
      </div>

      <div class="container m15">
        <div class="row">
          <div class="col">
              <h3>{{vacancy.companyName}}</h3>
              <p class="p-show"><strong>{{ $t('category') }} : </strong> <span>{{kind_job(vacancy.category)}}</span> </p>
              <p class="p-show"><strong>{{ $t('level') }} : </strong> <span>{{kind_level(vacancy.level)}}</span> </p>
              <p class="p-show"><strong>{{ $t('salary') }} : </strong> <span>{{ salary }}</span> </p>
              <p class="p-show"><strong>{{ $t('workPlace') }} : </strong> <span>{{vacancy.location}}</span> </p>
              <p class="p-show"><strong>{{ $t('city') }} : </strong> <span>{{vacancy.city}}</span> </p>

              <hr>
              <div v-html="vacancy.description"></div>

              <br>
              <button class="btn btn-aplicar" v-on:click="apply_candidate(vacancy.id)">Aplicar nesta vaga</button>
              <br>
              <br>
              <br>
              <br>
          </div>
          <div class="col">
            <h4 class="p-show"><strong>{{ $t('otherBenefits') }}</strong></h4>
            <div v-html="vacancy.bonus"></div>
            <br>
            <span class="btn skills-list" v-for="skill in skills(vacancy.skills)" :key="skill.index">{{skill}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { getVacancy, applyCandidate } from '@/api'
  import { kindLevel, kindJob } from '@/controllers/enums'
  import { skillsConvert, currencyFormat } from '@/controllers'

  export default {
    props: ['id'],
    data () {
      return {
        vacancy: {},
        salary: null
      }
    },
    created () {
      getVacancy(this.id)
        .then(vacancy => {
          this.vacancy = vacancy
          this.salary = currencyFormat(this.vacancy.salary)
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods: {
      kind_level (level) {
        return kindLevel(level)
      },
      kind_job (category) {
        return kindJob(category)
      },
      skills (skillsList) {
        return skillsConvert(skillsList)
      },
      apply_candidate (id) {
        if (confirm('Tens certeza que queres candidatar-se a esta vaga?')) {
          if (localStorage.getItem('currentToken')) {
            applyCandidate(id)
              .then(res => {
                this.$router.push('/dashboard')
              })
              .catch(error => {
                this.error = error
              })
          } else {
            this.$router.push({ name: 'login', query: { redirect: `/vacancies/${id}` } })
          }
        }
      }
    }
  }
</script>

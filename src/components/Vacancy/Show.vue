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
              <h3>{{vacancy.company}}</h3>
              <p class="p-show"><strong>{{ $t('category') }} : </strong> <span>{{kind_job(vacancy.category)}}</span> </p>
              <p class="p-show"><strong>{{ $t('level') }} : </strong> <span>{{kind_level(vacancy.level)}}</span> </p>
              <p class="p-show"><strong>{{ $t('salary') }} : </strong> <span>{{vacancy.salary}}</span> </p>
              <p class="p-show"><strong>{{ $t('workPlace') }} : </strong> <span>{{vacancy.location}}</span> </p>
              <p class="p-show"><strong>{{ $t('city') }} : </strong> <span>{{vacancy.city}}</span> </p>

              <hr>
              <h4 class="p-show"><strong>{{ $t('responsibilities') }}</strong></h4>
              <p class="p-show">{{vacancy.responsibilities}}</p>

              <hr>
              <h4 class="p-show"><strong>{{ $t('requirements') }}</strong></h4>
              <p class="p-show">{{vacancy.requirements}}</p>

              <hr>
              <h4 class="p-show"><strong>{{ $t('otherBenefits') }}</strong></h4>
              <p class="p-show" v-for="bonu in benefits(vacancy.bonus)" :key="bonu.index"> - {{bonu}}</p>

              <br>
              <router-link class="btn btn-aplicar" to="/">Aplicar nesta vaga</router-link>
              <br>
              <br>
              <br>
              <br>
          </div>
          <div class="col">
            <p>{{vacancy.description}}</p>
            <br>
            <span class="btn skills-list" v-for="skill in skills(vacancy.skills)" :key="skill.index">{{skill}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { getVacancy } from '@/api'
  import { kindLevel, kindJob } from '@/controllers/enums'
  import { skillsConvert } from '@/controllers'

  export default {
    props: ['id'],
    data () {
      return {
        vacancy: {}
      }
    },
    created () {
      getVacancy(this.id)
        .then(vacancy => {
          this.vacancy = vacancy
        })
        .catch(error => {
          console.log(error)
        })
    },
    methods: {
      benefits (bonus) {
        var b = bonus
        if (!b) {
          return b
        }
        b = b.replace(/'/g, '"')
        b = JSON.parse(b)
        return b
      },
      kind_level (level) {
        return kindLevel(level)
      },
      kind_job (category) {
        return kindJob(category)
      },
      skills (skillsList) {
        return skillsConvert(skillsList)
      }
    }
  }
</script>

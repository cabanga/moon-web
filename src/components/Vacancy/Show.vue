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
              <p class="p-show"><strong>{{ $t('salary') }} : </strong> <span>{{vacancy.salary}}</span> </p>
              <p class="p-show"><strong>{{ $t('workPlace') }} : </strong> <span>{{vacancy.workPlace}}</span> </p>
              <p class="p-show"><strong>{{ $t('city') }} : </strong> <span>{{vacancy.city}}</span> </p>

              <br>
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
      skills (skillsList) {
        var k = skillsList
        if (!k) {
          return k
        }
        k = k.replace(/'/g, '"')
        k = JSON.parse(k)
        return k
      }
    }
  }
</script>

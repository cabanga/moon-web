<template>
    <div class="">
      <div class="bg-vacancies">
        <div class="container container-home">
          <br>
          <h2 class="text-center text-title under-text">{{$t('editVacancy')}}</h2>
        </div>
      </div>

      <div class="container m15">

      </div>
    </div>
</template>

<script>
  import { getVacancy } from '@/api'

  export default {
    name: 'edit-vacancy',
    props: ['id'],
    data () {
      return {
        vacancyObject: {}
      }
    },
    created () {
      getVacancy(this.id)
        .then(vacancy => {
          this.vacancyObject = vacancy
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
</script>

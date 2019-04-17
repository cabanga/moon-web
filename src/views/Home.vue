<template>
  <div>
    <div class="bg-home">
      <div class="container container-home">
        <br>
        <h2 class="text-center text-title under-text">
          {{ $t('titleDefaul') }}
        </h2>
      </div>
    </div>

    <div class="container m15">

      <div class="row no-padding">
        <VacancyCard v-for="vac in lastVacancies" :vacancy="vac" :key="vac.id">
        </VacancyCard>
      </div>

      <br>
      <br>
      <br>

      <div>
        <h2 class="text-center text-title under-text">
          {{ $t('titleDefaul2') }}
        </h2>
        <p class="text-center text-d p-text">{{ $t('descriptionTitleDefault2') }}</p>
      </div>

      <br>
      <br>
    </div>
  </div>
</template>

<script>
  /* eslint func-call-spacing: ["error", "never"] */
  /* eslint function-paren-newline: ["error", "multiline"] */
  /* eslint-disable */
  
  import VacancyCard from '@/components/VacancyCard.vue'
  import {getLastVacancies} from '@/api'

  export default {
    name: 'home',
    data () {
      return {
        lastVacancies: []
      }
    },
    components: {
      VacancyCard
    },
    created () {
      getLastVacancies()
      .then(vacancies => {
        this.lastVacancies = vacancies
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
</script>
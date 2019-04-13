<template>
  <div>
    <div class="bg-home">
      <div class="container container-home">
        <h2 class="text-center text-title ">
          Plataforma 100% Angolana, para vagas de T.I.
        </h2> 
      </div>
    </div>

    <div class="container">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div class="row no-padding">
        <VacancyCard v-for="vac in dataVacancies" :vacancy="vac" :key="vac.id">
        </VacancyCard>
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
  
  import VacancyCard from '@/components/VacancyCard.vue';
  import dataV from '@/api/data.json'

  export default {
    name: 'home',
    data () {
      return {
        dataVacancies: dataV
      }
    },
    components: {
      VacancyCard
    }
  }
</script>
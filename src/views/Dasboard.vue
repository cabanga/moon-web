<template>
  <div class="dashboard container">
    <h1>My vacancies</h1>
      <div class="row no-padding">
      <VacancyCard v-for="vac in myVacancies" :vacancy="vac" :key="vac.id" />
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  // eslint-disable-next-line
  import { getMyVacancies } from '@/api'
  import VacancyCard from '@/components/VacancyCard.vue'


  export default {
    name: 'dashboard',
    data () {
      return {
        myVacancies: []
      }
    },
    components: {
      VacancyCard
    },
    created () {
      getMyVacancies()
      .then(res => {
        this.myVacancies = res
        console.log("my vacancies : ", this.myVacancies);
        
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
</script>

<style scoped>
  .dashboard{
    margin-top: -3%;
  }
  
  .nav-link-m{
    display: -webkit-inline-box;
    padding: .5rem 1rem;
    color: #b63c06;
  }
</style>
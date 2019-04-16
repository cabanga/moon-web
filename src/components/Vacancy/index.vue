<template>
    <div class="">
      <div class="bg-vacancies">
        <div class="container container-home">
          <br>

          <h3 class="text-center text-title under-text">{{ $t('filterDevelopers') }}</h3>
          <input type="text" class="form-control" placeholder="Selecione o filtro">
         
          <!-- <v-select :options="['foo', 'bar', 'baz']"></v-select> -->

        </div>
      </div>

      <div class="container m15">
        <div class="row">
          <div class="col-sm-3">
            <h4>Filter</h4>
          </div>

          <div class="col-sm-9">
            <div class="row no-padding">
              <VacancyList v-for="vac in dataVacancies" :vacancy="vac" :key="vac.id"></VacancyList>
            </div>
          </div>
        </div>
      </div>


    </div>
</template>


<script>
  /* eslint func-call-spacing: ["error", "never"] */
  /* eslint function-paren-newline: ["error", "multiline"] */
  /* eslint-disable */
  
  import VacancyList from '@/components/VacancyList.vue';
  import dataV from '@/api/data.json'

  export default {
    name: 'home',
    data () {
      return {
        dataVacancies: dataV
      }
    },
    components: {
      VacancyList
    }
  }
</script>


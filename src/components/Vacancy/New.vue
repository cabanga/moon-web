<template>
    <div class="">
      <div class="bg-vacancies">
        <div class="container container-home">
          <br>
          <h2 class="text-center text-title under-text">{{$t('publishVacancy')}}</h2>
        </div>
      </div>

      <div class="container m15">
        <Form />
      </div>
    </div>
</template>

<script>
  /* eslint func-call-spacing: ["error", "never"] */
  /* eslint function-paren-newline: ["error", "multiline"] */
  /* eslint-disable */
  
  import Form from '@/components/Vacancy/Form'

  export default {
    name: 'home',
    components: {
      Form
    }
  }
</script>
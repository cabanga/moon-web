<template>
  <div class="col-sm-12">
    <router-link to="/vacancies/:show">
      <div class="card card-moon-list ">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="card-body">
              <h5 class="color-default">{{vacancy.title}}</h5>
              <p><span>{{vacancy.company}}</span> </p>
              <p class="p-info"><strong>{{ $t('salary') }} : </strong> <span>{{vacancy.salary}}</span> </p>
              <p class="p-info"><strong>{{ $t('workPlace') }} : </strong> <span>{{vacancy.workPlace}}</span> </p>
              <p class="p-info"><strong>{{ $t('city') }} : </strong> <span>{{vacancy.city}}</span> </p>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="card-body">

              <span class="btn skills-list" v-for="skill in vacancy.skills" :key="skill.index">{{skill}}</span>

            </div>
          </div>
        </div>
      </div>

    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      vacancy: Object
    }
  }
</script>
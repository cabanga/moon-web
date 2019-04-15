<template>
  <div class="col-sm-12">

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

  </div>
</template>

<script>
  export default {
    props: {
      vacancy: Object
    }
  }
</script>

<style scoped>
  .btn.skills-list{
    background-color: #b84506ab!important;
    color: #fff;
    margin: 0 4px;
    font-size: 12px;
    border-radius: 60px;
  }

  .card.card-moon-list{
    background-color: #8c8c8c1a;
    border: 0px solid rgba(0,0,0,.125);
    border-radius: 0;
    margin: 5px 0;
  }

  .card.card-moon-list:hover{
    background-color: #8c8c8c1a;
    border: 0px solid rgba(0,0,0,.125);
    border-radius: 0;
    margin: 5px 0;
    -webkit-box-shadow: #8c8c8c1a 2px;
    box-shadow: #00000012 0px 5px 4px;
  }

</style>
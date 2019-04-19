<template>
  <div class="col-sm-4">
    <div class="card card-moon">
      <div class="card-title">
        <br>
        <h5 class="text-center color-default">{{vacancy.title}}</h5>
      </div>
      <div class="card-body">
        <p><span>{{vacancy.companyName}}</span> </p>
        <p class="p-info"><strong>{{ $t('salary') }} : </strong> <span>{{vacancy.salary}}</span> </p>
        <p class="p-info"><strong>{{ $t('workPlace') }} : </strong> <span>{{vacancy.location}}</span> </p>
        <p class="p-info"><strong>{{ $t('city') }} : </strong> <span>{{vacancy.city}}</span> </p>
        <br>
        <router-link class="btn btn-sm btn-update" :to="{name: 'vacancy-edit', params: {id: vacancy.id}}">
          Editar
        </router-link>

        <router-link class="btn btnSubmit-login btn-sm" :to="{name: 'vacancy', params: {id: vacancy.id}}">
          Ver detalhes
        </router-link>

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

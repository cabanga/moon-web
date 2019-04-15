<template>
    <div class="col-sm-4">
        <div class="card card-moon">

            <div class="card-title">
                <br>
                <h5 class="text-center color-default">{{vacancy.title}}</h5>
            </div>
            <div class="card-body">
                <p><span>{{vacancy.company}}</span> </p>
                <p class="p-info"><strong>{{ $t('salary') }} : </strong> <span>{{vacancy.salary}}</span> </p>
                <p class="p-info"><strong>{{ $t('workPlace') }} : </strong> <span>{{vacancy.workPlace}}</span> </p>
                <p class="p-info"><strong>{{ $t('city') }} : </strong> <span>{{vacancy.city}}</span> </p>
                <br>
                <button type="submit" class="btn btnSubmit-login btn-sm ">Ver detalhes</button>
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

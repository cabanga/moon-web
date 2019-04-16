<template>
    <div class="">

      <div class="bg-vacancies">
        <div class="container container-home">
          <h2 class="text-center text-title under-text">{{ id }}</h2>

          <br>
          <h2 class="text-center text-title under-text">{{vacancy.title}}</h2>
        </div>
      </div>

      <div class="container m15">
        <div class="row">
          <div class="col">
              <h3>{{vacancy.company}}</h3>
              <p class="p-show"><strong>{{ $t('salary') }} : </strong> <span>{{vacancy.salary}}</span> </p>
              <p class="p-show"><strong>{{ $t('workPlace') }} : </strong> <span>{{vacancy.workPlace}}</span> </p>
              <p class="p-show"><strong>{{ $t('city') }} : </strong> <span>{{vacancy.city}}</span> </p>

              <br>
              <br>
              <router-link class="btn btn-aplicar" to="/">Aplicar nesta vaga</router-link>
              <br>
              <br>
              <br>
              <br>
          </div>
          <div class="col">
            <p>{{vacancy.description}}</p>
            <br>
            <span class="btn skills-list" v-for="skill in vacancy.skills" :key="skill.index">{{skill}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        vacancy: {
          "id": 1,
          "title": "Programdor web Ruby On Rails",
          "company": "Kianda Stream, Lda",
          "salary": "300,000.00",
          "workPlace": "Luanda, Samba",
          "city": "Luanda",
          "description": "A Moon oferece um cadastro de maneira intuitiva e simples, bem como testes com os quais você pode demonstrar suas habilidades. Em pouco tempo consegui agendar entrevistas e estar inserido no mercado.",
          "skills": [
            "Boostrap", "Jquery", "Ruby Puro"
          ]
        }
      }
    },
    props: ["id"]
  }
</script>
<template lang="html">
  <b-row>
    <b-col lg="10" offset-lg="1">
      <h2>{{about.header}}</h2>
      <p>{{about.lead}}</p>
      <b-row>
        <b-col
          md="6"
          v-for="person in about.people"
          :key="about[person].id"
        >
          <b-img
            fluid
            class="mb-3"
            :src="about[person].img"
            :alt="about[person].name"
          />
          <h3>
            {{about[person].name}}
          </h3>
          <p v-html="about[person].bio"></p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "about-people",
  data() {
    return {
      about: {
        header: "Detrás de Lobo y Mono",
        lead:
          "El equipo humano en Lobo y mono lo conforman dos personas blabla...",
        people: ["laura", "sara"],
        laura: {
          id: "laura",
          img: "//via.placeholder.com/800x475",
          name: `Laura Hermoso`,
          bio: `Soy una Madrileña de culo inquieto que no deja de emprender y
            participar en proyectos que hagan de este mundo un lugar mejor, más
            amable y más divertido!. “Belloartista” licenciada con máster
            incluido y varios proyectos en marcha. Puedes visitar mi perfil en
            <a href='#' target='_blank'>linkedin<a>.`
        },
        sara: {
          id: "sara",
          img: "//via.placeholder.com/800x475",
          name: "Sara Formoso",
          bio: `Creadora de eventos desde el 2013, me encanta embarcarme en
          nuevos proyectos sin miedo a nuevos retos. Mamá de dos hijos formada
          en artes plásticas. Todoterreno perfeccionista. Me gusta disfrutar de
          la maternidad sin dejar de crecer personal y profesionalmente. Soy
          feliz al sol y disfruto cada minuto compartido con la inteligencia
          innata de la infancia. Puedes visitar mi Perfil en <a href ="#"
          target="_blank">Linkedin.</a>`
        }
      }
    };
  }
};
</script>

<style lang="css">
</style>

<template lang="html">
  <b-row class="py-3">
    <b-col lg="10" offset-lg="1">
      <h2 class="mb-4 text-uppercase text-center">{{title}}</h2>
      <div v-for="key in items" :key="key">
        <h3>{{values[key].title}}</h3>
        <p>{{values[key].text}}</p>
        <ul v-if="values[key].list">
          <li v-for="item in values[key].list" :key="item">{{item}}</li>
        </ul>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "about-values",
  data() {
    return {
      title: "Nuestros Valores",
      items: ["family", "focus", "service"],
      values: {
        family: {
          title: "Eventos para todos los miembros de la familia.",
          text:
            "Por ello creemos indispensable proporcionar espacios en el que las familias en toda su diversidad encuentren un momento de diversión para compartir con los más peques. Nos merecemos espacios de ocio alternativo en el que los adultos podamos enseñar cuáles fueron las cosas que nos motivaron de jóvenes y las que nos mueven actualmente."
        },
        focus: {
          title: "Eventos con objetivos",
          text:
            "Nuestras propuestas siempre incluyen pilares que creemos imprescindibles, como el respeto a la infancia",
          list: [
            "Cuidado de la infancia",
            "Cultura, tradición y Educación",
            "Ecología y concienciación",
            "Respeto a los animales y el medio ambiente"
          ]
        },
        service: {
          title: "Atención al cliente",
          text:
            "Gracias a nuestra formación artística valoramos los detalles y le damos importancia a todo lo relacionado con lo estético y cuidado. Nos encanta reinventar conceptos y darle una vuelta a cualquier propuesta para que sea exclusiva y diferente.",
          list: [
            "Atención al detalle",
            "Te escuchamos",
            "Hacemos que sea fácil",
            "Nos adaptamos a tus necesidades"
          ]
        }
      }
    };
  }
};
</script>

<style lang="css">
</style>

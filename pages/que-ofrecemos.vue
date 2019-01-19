<template lang="html">
  <div>
    <header role="banner" class="bg-light">
      <b-container class="py-3 py-lg-4 text-center mb-3 mb-lg-4">
        <b-row>
          <b-col lg="10" offset-lg="1">
            <h1 class="mb-3">
              {{title}}
            </h1>

            <p class="lead mb-0">
              Lobo y Mono Te ofrece la oportunidad de que cuentes tu propia historia utilizando la cultura y la tradición como herramienta narrativa, abarcando todo tipo de perfiles y edades, porque las familias son muy diversas!.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </header>

    <section class="mb-lg-5">
      <b-container>
        <b-row>
          <b-col lg="10" offset-lg="1">
            <h3 class="h4">
              Cultura y Ocio como transformación social
            </h3>

            <p>
              Nos dedicamos a crear eventos culturales en todo su espectro. Utilizamos el ocio y la diversión como herramienta de transformación social.
              Pensamos el ocio como una oportunidad para aprender disfrutando.
            </p>

            <h3 class="h4">
              Diversidad
            </h3>

            <p>
              Nuestras propuestas están orientadas a la pluralidad y la diversidad
              La diversidad es riqueza, cada día las familias son más plurales y diferentes.
            </p>

            <h3 class="h4">
              Intergeneracional
            </h3>

            <p>
              Apostamos por el cuidado de la infancia. Nuestra prioridad es que tanto adultos como pequeños experimenten la calidad en el ocio de forma
              intergeneracional. Los peques lo pasarán genial y los mayores, ¡Aún mejor!.
            </p>

            <h4 class="h5">
              Otros Servicios Complementarios:
            </h4>

            <ul>
              <li>Catering.</li>
              <li>Cobertura audiovisual.</li>
              <li>Decoración.</li>
              <li>Personal tecnico.</li>
              <li>Diseño y difusión.</li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section>
      <b-container>
        <b-row>
          <b-col lg="10" offset-lg="1">
            <ul class="list-unstyled mb-4">
              <li class="lead text-uppercase">
                Paquetes prediseñados
              </li>
              <li class="lead text-uppercase">
                Libroscopia
              </li>
              <li class="lead text-uppercase">
                Al fresquito
              </li>
              <li class="lead text-uppercase">
                Carnivàle
              </li>
              <li class="lead text-uppercase">
                Business party
              </li>
              <li class="lead text-uppercase">
                Fiesta música electrónica para familias
              </li>
              <li class="lead text-uppercase">
                Veranillo
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="bg-light">
      <b-container>
        <b-row>
          <b-col lg="10" offset-lg="1">
            <div class="text-center p-lg-5">
              <p class="lead text-uppercase">
                !lobo y mono te ofrece la posibilidad de configurar tu evento y  obtener un presupuesto en tiempo real!
              </p>

              <lm-button to="/crea-tu-evento" variant="primary">
                Configura tu evento
              </lm-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import LmButton from "@/components/LmButton.vue";

export default {
  name: "ServicesPage",
  layout: "page",
  components: {
    LmButton
  },
  data() {
    return {
      title: "Qué ofrecemos"
    };
  }
};
</script>

<style lang="css">
</style>

<!-- eslint-disable -->
<template lang="html">
  <b-container class="py-5">

    <h1 class="text-capitalize text-center mb-4">
      {{eventsHash[$route.params.id].text}}
    </h1>

    <section class="mb-5">
      <div class="mx-auto" style="max-width:45rem">
        <div class="mb-4">
          <b-img class="mb-2" src="//via.placeholder.com/1200x800" fluid />
          <p class="small text-muted">Pié de foto super chachi y tal y cual</p>
        </div>

        <p>
          Evento diseñado para Hub Madrid en el proyecto “Hub Art” en el que se creaban redes profesionales entre artistas y nuevos emprendedores.
        </p>

        <p>
          Exposición y presentación del proyecto artístico “Usted está aquí”. En la producción del evento se trató de recrear un espacio de diálogo en el que poder debatir sobre Sociología del Arte Urbano y Graffiti. Creando un espacio en el que convivieron tanto artistas urbanos como estudiantes de bellas artes de la Universidad Complutense.
        </p>

        <p>
          Contamos con la participación de diferentes colectivos y sociólogos sobre el tema, así como con vecinos del barrio. El evento fue dirigido por Sr Mu, Dr. Humes y Sara Formoso.
        </p>

        <p>
          Desde Lobo y Mono, ofrecemos crear y adaptar el espacio, para que tu evento recree el clímax adecuado para que sucedan cosas bonitas. Así como cobertura audiovisual y cualquier cosa que se nos ocurra juntas.
        </p>
      </div>

      <div class="small text-center py-5">
        <div class="block">HUB MADRID, HUB ART</div>
        <div class="block">USTED ESTÁ AQUÍ</div>
        <div class="block">Exposición y Mesa Redonda</div>
        <div class="block">21 marzo, 2012</div>
      </div>
    </section>

    <b-row>
      <b-col sm="4" class="mb-4">
        <b-img-lazy src="//via.placeholder.com/800x600" fluid />
      </b-col>

      <b-col sm="4" class="mb-4">
        <b-img-lazy src="//via.placeholder.com/800x600" fluid />
      </b-col>

      <b-col sm="4" class="mb-4">
        <b-img-lazy src="//via.placeholder.com/800x600" fluid />
      </b-col>

      <b-col sm="4" class="mb-4">
        <b-img-lazy src="//via.placeholder.com/800x600" fluid />
      </b-col>

      <b-col sm="4" class="mb-4">
        <b-img-lazy src="//via.placeholder.com/800x600" fluid />
      </b-col>

      <b-col sm="4" class="mb-4">
        <b-img-lazy src="//via.placeholder.com/800x600" fluid />
      </b-col>

      <b-col sm="4" class="mb-4">
        <b-img-lazy src="//via.placeholder.com/800x600" fluid />
      </b-col>

      <b-col sm="4" class="mb-4">
        <b-img-lazy src="//via.placeholder.com/800x600" fluid />
      </b-col>

      <b-col sm="4" class="mb-4">
        <b-img-lazy src="//via.placeholder.com/800x600" fluid />
      </b-col>

    </b-row>

    <b-row class="py-5">
      <b-col>
        <lm-button
          variant="secondary"
        >
          Anterior
        </lm-button>
      </b-col>
      <b-col class="text-right">
        <lm-button
          variant="secondary"
        >
          Siguiente
        </lm-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import LmButton from "@/components/LmButton.vue";

export default {
  name: "EventPage",
  layout: "page",
  components: {
    LmButton
  },
  data() {
    return {
      eventsList: [],
      eventsHash: {
        0: {
          slug: "",
          text: "Nombre del evento",
          img: {
            src: "",
            srcset: ""
          }
        },
        1: {
          text: "This event has the id 1",
          img: {
            src: "",
            srcset: ""
          }
        },
        2: {
          text: "This event has the id 2",
          img: {
            src: "",
            srcset: ""
          }
        },
        3: {
          text: "This event has the id 3",
          img: {
            src: "",
            srcset: ""
          }
        },
        4: {
          text: "This event has the id 4",
          img: {
            src: "",
            srcset: ""
          }
        },
        5: {
          text: "This event has the id 5",
          img: {
            src: "",
            srcset: ""
          }
        },
        6: {
          text: "This event has the id 6",
          img: {
            src: "",
            srcset: ""
          }
        },
        7: {
          text: "This event has the id 7",
          img: {
            src: "",
            srcset: ""
          }
        },
        8: {
          text: "This event has the id 8",
          img: {
            src: "",
            srcset: ""
          }
        }
      }
    };
  }
};
</script>

<style lang="css">
</style>

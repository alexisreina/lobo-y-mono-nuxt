<template lang="html">
  <div class="collab">

    <header class="py-5">
      <b-container>
        <h1>{{header}}</h1>
        <p class="lead">
          {{lead}}
        </p>
      </b-container>
    </header>

    <main>
      <artist-list :data="artistList" />

      <b-container class="py-5">
        <h2>
          {{cta.header}}
        </h2>

        <p
          class="lead mb-5"
          v-html="cta.lead"
        />

        <div class="text-center">
          <lm-button
            variant="primary"
            size="lg"
            :to="cta.btn.link"
          >
            {{cta.btn.label}}
          </lm-button>
        </div>
      </b-container>
    </main>

  </div>
</template>

<script>
import ArtistList from "@/components/ArtistList.vue";
import LmButton from "@/components/LmButton.vue";

export default {
  name: "CollabPage",
  layout: "page",
  components: {
    ArtistList,
    LmButton
  },
  data() {
    return {
      header: "Artistas Colaboradores",
      lead:
        "En Lobo y Mono nos gustan las familias, creemos en el cuidado de las relaciones y por ello confiamos en la red de artistas que participan en nuestros eventos. Aquí os mostramos el trabajo que han realizado para nosotras y os facilitamos su web para que podáis echar un vistazo más amplio a su trabajo.",
      cta: {
        header:
          "¿Tienes un espectáculo y te gustaría trabajar en nuestros eventos?",
        lead:
          'Escríbenos a <a href="mailto:soyartista@loboymono.com">soyartista@loboymono.com</a>, adjunta tu página web o portfolio, cuál es la motivación por la que te gustaría trabajar con nosotras, tus tarifas y tus datos de contacto para que nos pongamos en contacto contigo.',
        btn: {
          label: "Quiero trabajar con Lobo y Mono",
          link: "contacto"
        }
      },
      artistList: [
        {
          id: 0,
          name: "Nombre del Artista",
          img: {
            src: "//via.placeholder.com/350x275",
            srcset: "//via.placeholder.com/700x550 2x"
          }
        },
        {
          id: 1,
          name: "Nombre del Artista",
          img: {
            src: "//via.placeholder.com/350x275",
            srcset: "//via.placeholder.com/700x550 2x"
          }
        },
        {
          id: 2,
          name: "Nombre del Artista",
          img: {
            src: "//via.placeholder.com/350x275",
            srcset: "//via.placeholder.com/700x550 2x"
          }
        },
        {
          id: 3,
          name: "Nombre del Artista",
          img: {
            src: "//via.placeholder.com/350x275",
            srcset: "//via.placeholder.com/700x550 2x"
          }
        },
        {
          id: 4,
          name: "Nombre del Artista",
          img: {
            src: "//via.placeholder.com/350x275",
            srcset: "//via.placeholder.com/700x550 2x"
          }
        },
        {
          id: 5,
          name: "Nombre del Artista",
          img: {
            src: "//via.placeholder.com/350x275",
            srcset: "//via.placeholder.com/700x550 2x"
          }
        },
        {
          id: 6,
          name: "Nombre del Artista",
          img: {
            src: "//via.placeholder.com/350x275",
            srcset: "//via.placeholder.com/700x550 2x"
          }
        },
        {
          id: 7,
          name: "Nombre del Artista",
          img: {
            src: "//via.placeholder.com/350x275",
            srcset: "//via.placeholder.com/700x550 2x"
          }
        },
        {
          id: 8,
          name: "Nombre del Artista",
          img: {
            src: "//via.placeholder.com/350x275",
            srcset: "//via.placeholder.com/700x550 2x"
          }
        }
      ]
    };
  }
};
</script>

<style lang="css">
</style>

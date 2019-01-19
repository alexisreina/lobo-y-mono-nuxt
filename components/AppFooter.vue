<template lang="html">
  <footer class="bg-light">
    <b-container class="py-3">
      <!-- social media -->
      <div class="py-3 d-flex flex-row justify-content-center">
        <b-link
          v-for="social in rrss"
          :key="social.id"
          :href="social.url"
          class="d-flex flex-column flex-sm-row justify-content-center align-items-center mx-3"
          rel="noopener"
          target="_blank"
        >
          <b-img
            blank
            blank-color="#777"
            rounded="circle"
            width="32"
            height="32"
            class="mb-1 mb-sm-0 mr-sm-2"
          />
          <span>{{social.label}}</span>
        </b-link>
      </div>
      <!-- /social media -->

      <hr class="mb-4">

      <!-- footer navigation -->
      <b-row>
        <b-col
          lg="10"
          offset-lg="1"
        >
          <b-row>
            <b-col
              v-for="item in navigation"
              :key="item.id"
              md="6"
              lg="3"
            >
              <h4 class="h5">
                {{item.header}}
              </h4>

              <ul class="list-unstyled">
                <li
                  v-for="link in item.links"
                  :key="link.id"
                >
                  <b-link
                    :to="link.link"
                  >
                    {{link.label}}
                  </b-link>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- footer navigation -->
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      rrss: [
        {
          id: 0,
          label: "Facebook",
          icon: "",
          url: "#"
        },
        {
          id: 1,
          label: "Instagram",
          icon: "",
          url: "#"
        },
        {
          id: 3,
          label: "Linkedin",
          icon: "",
          url: "#"
        }
      ],
      navigation: [
        {
          id: 0,
          header: "Eventos",
          links: [
            {
              id: 0,
              label: "Próximo Evento",
              link: "/eventos"
            },
            {
              id: 1,
              label: "Galería de Eventos",
              link: "/eventos"
            },
            {
              id: 2,
              label: "Eventos en familia",
              link: "/eventos"
            }
          ]
        },
        {
          id: 1,
          header: "Quienes Somos",
          links: [
            {
              id: 0,
              label: "Lobo y Mono",
              link: "/quienes-somos"
            },
            {
              id: 1,
              label: "Cuento",
              link: "/cuento"
            }
          ]
        },
        {
          id: 2,
          header: "Servicios",
          links: [
            {
              id: 0,
              label: "Qué ofrecemos",
              link: "/"
            },
            {
              id: 1,
              label: "Configura tu evento",
              link: "/"
            },
            {
              id: 2,
              label: "Artistas",
              link: "/"
            },
            {
              id: 3,
              label: "Trabaja con nosotras",
              link: "/"
            }
          ]
        },
        {
          id: 3,
          header: "Contacto",
          links: [
            {
              id: 0,
              label: "Email",
              link: ""
            },
            {
              id: 1,
              label: "Teléfono",
              link: ""
            }
          ]
        }
      ]
    };
  }
};
</script>

<style module lang="scss">
</style>

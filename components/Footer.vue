<template lang="html">
  <div :class="$style.footer">
    <footer>
      <b-container class="py-5">
        <b-row>
          <b-col lg="10" offset="1">
            <b-row>
              <b-col md="6" lg="3" v-for="item in list" :key="item.id">
                <h4 class="h5">{{item.header}}</h4>
                <ul class="list-unstyled">
                  <li v-for="link in item.links" :key="link.id">
                    <router-link :to="link.link">{{link.label}}</router-link>
                  </li>
                </ul>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      list: [
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
          header: "Contaco",
          links: [
            {
              id: 0,
              label: "email",
              link: ""
            },
            {
              id: 1,
              label: "teléfono",
              link: ""
            },
            {
              id: 2,
              label: "Social media",
              link: "link"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style module lang="scss">
.footer {
  border-top: 1px solid #eee;
}
</style>

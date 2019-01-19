<template lang="html">
  <div class="home-services">
    <b-row>
      <b-col lg="10" offset-lg="1">
        <header class="row">
          <b-col lg="8">
            <h2 class="h3">
              {{title}}
            </h2>

            <p class="mb-5">
              {{text}}
            </p>
          </b-col>
        </header>

        <b-row>
          <b-col
            v-for="service in services"
            :key="service.is"
            md="4"
          >
            <div class="py-2">
              <b-img
                blank
                blank-color="#777"
                rounded="circle"
                width="75"
                height="75"
                :alt="service.title"
                class="d-block mx-auto mb-3"
              />

              <h3
                class="h5 text-center"
              >
                {{service.title}}
              </h3>

              <p>
                {{service.text}}
              </p>

              <b-link :to="service.link.to">
                {{service.link.label}}
              </b-link>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "HomeServices",
  data() {
    return {
      title: "Qué te ofrece Lobo y Mono",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      services: [
        {
          id: 0,
          icon: "//via.placeholder.com/75x75",
          title: "Service 1",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          link: {
            label: "Descubre todo lo que hacemos",
            to: "/que-ofrecemos"
          }
        },
        {
          id: 1,
          icon: "//via.placeholder.com/75x75",
          title: "Service 2",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          link: {
            label: "Descubre todo lo que hacemos",
            to: "/que-ofrecemos"
          }
        },
        {
          id: 3,
          icon: "//via.placeholder.com/75x75",
          title: "Service 1",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          link: {
            label: "Descubre todo lo que hacemos",
            to: "/que-ofrecemos"
          }
        }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
</style>

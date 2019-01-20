<template lang="html">
  <div class="home-services">
    <header class="row mb-3">
      <b-col lg="6" offset-lg="1">
        <h2 class="h3">
          {{services.title}}
        </h2>

        <Markdown :content="services.intro" />
      </b-col>
    </header>

    <section>
      <b-row>
        <b-col
          v-for="service in services.list"
          :key="service.id"
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

            <Markdown :content="service.description" />
          </div>
        </b-col>
      </b-row>
    </section>

    <section class="text-center mb-3">
      <b-link :to="services.link.url">
        {{services.link.label}}
      </b-link>
    </section>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";

export default {
  name: "HomeServices",
  components: {
    Markdown
  },
  computed: {
    services() {
      return this.$store.state.home.services;
    }
  }
};
</script>

<style lang="css" scoped>
</style>

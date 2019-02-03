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

    <ServicesList :services="services.list" />

    <section
      v-if="services.link"
      class="text-center mb-3"
    >
      <b-link :to="services.link.url">
        {{services.link.label}}
      </b-link>
    </section>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import ServicesList from "@/components/ServicesList.vue";

export default {
  name: "HomeServices",
  components: {
    Markdown,
    ServicesList
  },
  props: {
    services: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="css" scoped>
.title {
  font-weight: 800;
  font-size: 36/15 * 1rem;
}
</style>

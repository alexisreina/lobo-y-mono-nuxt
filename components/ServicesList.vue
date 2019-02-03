<template lang="html">
  <b-row>
    <b-col
      v-for="service in services"
      :key="service.id"
      lg="4"
    >

      <b-img
        :src="service.image && require(`~/assets/${service.image.slice(1)}`)"
        :alt="service.title"
        class="d-block mx-auto mb-3"
        fluid
      />

      <h3 class="h5 text-md-center">
        {{service.title}}
      </h3>

      <Markdown :content="service.description" />
    </b-col>
  </b-row>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
export default {
  name: "ServiceList",
  components: {
    Markdown
  },
  props: {
    services: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="css" scoped>
</style>

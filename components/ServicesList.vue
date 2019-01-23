<template lang="html">
  <b-row>
    <b-col
      v-for="service in services"
      :key="service.id"
      md="4"
    >

      <b-img
        :src="service.image && required(`~/assets/${service.image}`)"
        :alt="service.title"
        :blank="!service.image"
        :blank-color="!service.image && '#e9e9e9'"
        class="d-block mx-auto mb-3"
        rounded="circle"
        width="75"
        height="75"
      />

      <h3 class="h4 text-md-center">
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

<template lang="html">
  <b-row>
    <b-col
      v-for="service in services"
      :key="service.id"
      md="4"
    >

      <b-img
        :src="service.image"
        :alt="service.title"
        blank
        blank-color="#777"
        rounded="circle"
        width="75"
        height="75"
        class="d-block mx-auto mb-3"
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
  computed: {
    services() {
      return this.$store.state.services.list;
    }
  }
};
</script>

<style lang="css" scoped>
</style>

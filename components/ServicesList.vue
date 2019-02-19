
<template lang="html">
  <div class="row">
    <div
      v-for="service in services"
      :key="service.id"
      class="col-lg-4 mb-3 mb-lg-0"
    >
      <div class="row align-items-md-center">
        <div class="col-md-4 col-lg-12">
          <img
            :src="service.image && require(`~/assets/${service.image.slice(1)}`)"
            :alt="service.title"
            class="d-block mx-auto img-fluid mb-3 mb-lg-4"
          >
        </div>

        <div class="col-md-8 col-lg-12">
          <div class="mx-auto" style="max-width:25rem">
            <h3 class="h5 text-lg-center mb-3 mb-lg-4">
              {{service.title}}
            </h3>

            <Markdown :content="service.description" />
          </div>
        </div>
      </div>
    </div>
  </div>
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

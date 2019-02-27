<template lang="html">
  <div class="row align-items-md-center">
    <div class="col-md-4 col-lg-6">
      <img
        :src="service.image"
        :alt="service.title"
        class="img-fluid d-block mx-auto mb-3 mb-md-4 mb-lg-0"
      >
    </div>

    <div class="col-md-8 col-lg-6">
      <div style="max-width:25rem" class="mx-auto">
        <h2 class="h4 mb-3">
          {{service.title}}
        </h2>

        <Markdown class="mb-md-5" v-if="service.intro" :content="service.intro" />

        <LmButton :to="{ name: 'contacto' }" variant="primary">
          Contacta con nosotras
        </LmButton>
      </div>
    </div>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import LmButton from "@/components/LmButton.vue";

export default {
  name: "ServicesTailored",
  components: {
    Markdown,
    LmButton
  },
  props: {
    service: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="css" scoped>
</style>

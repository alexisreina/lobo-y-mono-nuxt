<template lang="html">
  <div class="d-xs-flex flex-xs-row align-items-xs-center justify-content-xs-center">
    <div class="py-5 text-center">
      <LmButton
        :to="cta.link"
        variant="primary"
        size="lg"
      >
        {{cta.label}}
      </LmButton>
    </div>
  </div>
</template>

<script>
import LmButton from "@/components/LmButton.vue";

export default {
  name: "HomeCta",
  components: {
    LmButton
  },
  props: {
    cta: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

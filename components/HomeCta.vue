<template lang="html">
  <div class="d-xs-flex flex-xs-row align-items-xs-center justify-content-xs-center">
    <div class="py-5 text-center">
      <lm-button
        :to="cta.link"
        variant="primary"
        size="lg"
      >
        {{cta.label}}
      </lm-button>
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
  computed: {
    cta() {
      return this.$store.state.home.cta;
    }
  }
};
</script>

<style lang="css">
</style>

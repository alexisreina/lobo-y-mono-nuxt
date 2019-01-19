<template lang="html">
  <div class="d-xs-flex flex-xs-row align-items-xs-center justify-content-xs-center">
    <div class="py-5 text-center">
      <lm-button
        variant="primary"
        size="lg"
        :to="link"
      >
        {{label}}
      </lm-button>
    </div>
  </div>
</template>

<script>
import lmButton from "@/components/lmButton.vue";

export default {
  name: "home-cta",
  components: {
    lmButton
  },
  data() {
    return {
      label: "Crea tu evento",
      link: "/crea-tu-evento"
    };
  }
};
</script>

<style lang="css">
</style>

<template lang="html">
  <div class="d-xs-flex flex-xs-row align-items-xs-center justify-content-xs-center">
    <div class="py-5 text-center">
      <lm-button
        :to="link"
        variant="primary"
        size="lg"
      >
        {{label}}
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

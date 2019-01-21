<template lang="html">
  <div class="text-center p-lg-5">
    <Markdown
      :content="cta.description"
      class="lead text-uppercase"
    />

    <LmButton
      :to="cta.button.url"
      variant="primary"
    >
      {{cta.button.label}}
    </LmButton>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import LmButton from "@/components/LmButton.vue";

export default {
  name: "ServicesCta",
  components: {
    Markdown,
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

<style lang="css" scoped>
</style>

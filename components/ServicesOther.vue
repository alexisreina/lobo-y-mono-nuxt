<template lang="html">
  <div>
    <h4 class="h5">
      {{other.title}}
    </h4>

    <Markdown :content="other.description" />
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
export default {
  name: "ServicesOther",
  components: {
    Markdown
  },
  props: {
    other: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="css" scoped>
</style>

<template lang="html">
  <div>
    <h2>
      {{other.title}}
    </h2>

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

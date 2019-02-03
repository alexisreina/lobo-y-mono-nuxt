<template lang="html">
  <b-row align-v="center">
    <b-col lg="6">
      <b-img
        :src="service.image"
        :alt="service.title"
        fluid
      />
    </b-col>

    <b-col lg="6">
      <div style="max-width:30rem">
        <h2 class="h3">
          {{service.title}}
        </h2>

        <Markdown v-if="service.intro" :content="service.intro" />
      </div>
    </b-col>
  </b-row>
</template>

<script>
import Markdown from "@/components/Markdown.vue";

export default {
  name: "ServicesTailored",
  components: {
    Markdown
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

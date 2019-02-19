<template lang="html">
  <div class="row align-items-lg-center flex-md-row-reverse">
    <div class="col-md-4 col-lg-6">
      <img
        :src="bundles.image && require(`~/assets/${bundles.image.slice(1)}`)"
        :alt="bundles.title"
        class="mx-auto d-block img-fluid mb-3 mb-md-4 mb-lg-0"
      >
    </div>

    <div class="col-md-8 col-lg-6">
      <div class="mx-auto" style="max-width:25rem">
        <h2 class="h4 mb-md-3">
          {{bundles.title}}
        </h2>

        <Markdown v-if="bundles.intro" :content="bundles.intro" />

        <ul v-if="bundles.list">
          <li
            v-for="(item, index) in bundles.list"
            :key="index"
          >
            {{item}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
export default {
  name: "ServiceBundles",
  components: {
    Markdown
  },
  props: {
    bundles: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="css" scoped>
</style>

<template lang="html">
  <b-row align-v="center" class="flex-md-row-reverse">
    <b-col md="6">
      <b-img
        :src="bundles.image && require(`~/assets/${bundles.image.slice(1)}`)"
        :alt="bundles.title"
        :rounded="!bundles.image"
        :blank="!bundles.image"
        :blank-color="!bundles.image && '#e9e9e9'"
        width="540"
        height="325"
        fluid
      />
    </b-col>

    <b-col md="6">
      <h2>
        {{bundles.title}}
      </h2>

      <Markdown :content="bundles.intro" />

      <ul>
        <li
          v-for="(item, index) in bundles.list"
          :key="index"
        >
          {{item}}
        </li>
      </ul>
    </b-col>
  </b-row>
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

<template lang="html">
  <b-row align-v="center" class="flex-md-row-reverse">
    <b-col md="6">
      <b-img
        :src="bundles.image"
        :blank="!bundles.image"
        :rounded="!bundles.image"
        blank-color="#777"
        width="540"
        height="325"
        alt=""
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
  computed: {
    bundles() {
      return this.$store.state.services.bundles;
    }
  }
};
</script>

<style lang="css" scoped>
</style>

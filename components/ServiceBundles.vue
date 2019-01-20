<template lang="html">
  <ul class="list-unstyled mb-4">
    <li
      v-for="bundle in bundles"
      :key="bundle.id"
      class="lead text-uppercase"
    >
      {{bundle.title}}
    </li>
  </ul>
</template>

<script>
export default {
  name: "ServiceBundles",
  computed: {
    bundles() {
      return this.$store.state.services.bundles;
    }
  }
};
</script>

<style lang="css" scoped>
</style>

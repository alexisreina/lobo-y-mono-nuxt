<template lang="html">
  <b-row class="partners">
    <b-col
      v-for="partner in $cms.partners"
      :key="partner.id"
    >
      <b-img
        :src="partner.logo && require(`~/assets/${partner.logo.slice(1)}`)"
        :alt="partner.label"
        :title="partner.label"
        class="d-block mx-auto partners__logo"
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Partners"
};
</script>

<style lang="scss" scoped>
.partners {
  background-color: $black;

  &__logo {
    max-height: 60px;
    max-width: 100%;
    width: auto;
  }
}
</style>

<template lang="html">
  <b-row>
    <b-col
      v-for="partner in partners"
      :key="partner.id"
      cols="4"
    >
      <b-img
        :src="partner.logo && require(`~/assets/${partner.logo.slice(1)}`)"
        :alt="partner.label"
        :title="partner.label"
        :blank="!partner.logo"
        :blank-color="!partner.logo && '#fff'"
        :class="{
          'ml-md-auto mr-md-0': partners.indexOf(partner) === 0,
          'ml-md-0 mr-md-auto': partners.indexOf(partner) === partners.length - 1
        }"
        class="d-block mx-auto"
        width="120"
        height="60"
        fluid
      />

      <!--
      <b-img-lazy
        :src="partner.img.src"
        :srcset="partner.img.srcset"
        :alt="partner.img.label"
      />
      -->

    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Partners",
  props: {
    partners: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="css">
</style>

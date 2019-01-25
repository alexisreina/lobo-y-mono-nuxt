<template lang="html">
  <b-row>
    <b-col
      v-for="(partner, key) in partners"
      :key="key"
      cols="4"
    >
      <b-img
        :src="partner.logo && require(`~/assets/${partner.logo.slice(1)}`)"
        :alt="partner.label"
        :title="partner.label"
        :blank="!partner.logo"
        :blank-color="!partner.logo ? '#fff' : null"
        class="d-block mx-auto"
        width="120"
        height="60"
        fluid
      />

      <!-- :class="{
        'ml-md-auto mr-md-0': partners.indexOf(partner) === 0,
        'ml-md-0 mr-md-auto': partners.indexOf(partner) === partners.length - 1
      }" -->

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
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="css">
</style>

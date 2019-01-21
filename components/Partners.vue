<template lang="html">
  <b-row>
    <b-col
      v-for="partner in partners"
      :key="partner.id"
      cols="4"
    >
      <b-img
        :src="partner.logo"
        :rounded="!partner.logo"
        :blank="!partner.logo"
        blank-color="#777"
        width="120"
        height="60"
        fluid
        class="d-block mx-auto"
        :class="{
          'ml-md-auto mr-md-0': partners.indexOf(partner) === 0,
          'ml-md-0 mr-md-auto': partners.indexOf(partner) === partners.length - 1
        }"
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

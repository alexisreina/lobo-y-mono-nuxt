<template lang="html">
  <b-row>
    <b-col
      v-for="partner in partners"
      :key="partner.id"
      cols="4"
    >
      <b-img
        blank
        blank-color="#777"
        width="120"
        height="80"
        fluid
        rounded
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
  data() {
    return {
      partners: [
        {
          id: 0,
          label: "Company Name",
          img: {
            src: "//via.placeholder.com/250x60&text=logo",
            srcset: "//via.placeholder.com/500x120&text=logo 2x"
          }
        },
        {
          id: 1,
          label: "Company Name",
          img: {
            src: "//via.placeholder.com/250x60&text=logo",
            srcset: "//via.placeholder.com/500x120&text=logo 2x"
          }
        },
        {
          id: 2,
          label: "Company Name",
          img: {
            src: "//via.placeholder.com/250x60&text=logo",
            srcset: "//via.placeholder.com/500x120&text=logo 2x"
          }
        }
      ]
    };
  }
};
</script>

<style lang="css">
</style>

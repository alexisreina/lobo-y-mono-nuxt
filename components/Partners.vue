<template lang="html">
  <b-row>
    <b-col v-for="partner in partners" :key="partner.img.id" class="text-center">
      <b-img-lazy
        :src="partner.img.src"
        :srcset="partner.img.srcset"
        :alt="partner.img.label"
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "partners",
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

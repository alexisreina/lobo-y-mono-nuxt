<template lang="html">
  <b-row class="partners">
    <!-- <pre class="text-white">{{$cms}}</pre> -->
    <b-col
      v-for="partner in partners"
      :key="partner.id"
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
/* eslint-disable */
export default {
  name: "Partners",
  computed: {
    partners() {
      const _partners = this.$cms.partners;
      // const result = [];
      const keys = Object.keys(_partners);
      const list = keys.map(key => _partners[key]);
      // const ids = keys.map(key => _partners[key].id).sort();

      return keys
        .map(key => _partners[key].id)
        .sort()
        .map(id => list.find(item => item.id === id));

      // console.log(_result);
      //
      // ids.forEach(id => {
      //   for (const key in _partners) {
      //     const partner = _partners[key];
      //
      //     // console.log(partner);
      //
      //     if (partner.id === id) {
      //       result.push(partner);
      //     }
      //   }
      // });
      //
      // // console.log(result);
      //
      // return result;
    }
  }

  // props: {
  //   partners: {
  //     type: Object,
  //     required: true
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.partners {
  background-color: $black;
}
</style>

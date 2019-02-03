<template lang="html">
  <b-row>
    <b-col
      v-for="artist in list"
      :key="artist.id"
      md="6"
      lg="4"
    >
      <ArtistListItem :artist="artist" />
    </b-col>
  </b-row>
</template>

<script>
import ArtistListItem from "@/components/ArtistListItem.vue";

export default {
  name: "ArtistList",
  components: {
    ArtistListItem
  },
  props: {
    list: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="css">
</style>

<template lang="html">
  <b-row>
    <b-col
      v-for="artist in artists"
      :key="artist.id"
      md="6"
      lg="4"
      class="pb-3"
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
  computed: {
    artists() {
      return this.$store.state.artist.list;
    }
  }
};
</script>

<style lang="css">
</style>

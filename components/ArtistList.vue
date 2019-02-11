<template lang="html">
  <div class="row">
    <div
      v-for="artist in list"
      :key="artist.id"
      class="col-md-6 col-lg-4"
    >
      <ArtistListItem :artist="artist" />
    </div>
  </div>
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

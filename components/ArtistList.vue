<template lang="html">
  <section class="artist-list">
    <b-container>
      <b-row>
        <b-col
          md="6"
          lg="4"
          class="pb-3"
          v-for="artist in data"
          :key="artist.id"
        >
          <artist-list-item :artist="artist" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import ArtistListItem from "@/components/ArtistListItem.vue";

export default {
  name: "artist-list",
  components: {
    ArtistListItem
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="css">
</style>

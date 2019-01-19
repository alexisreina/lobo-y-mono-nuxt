<template lang="html">
  <section class="artist-list">
    <b-container>
      <b-row>
        <b-col
          v-for="artist in data"
          :key="artist.id"
          md="6"
          lg="4"
          class="pb-3"
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
  name: "ArtistList",
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

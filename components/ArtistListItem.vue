<template lang="html">
  <figure>

    <b-img
      :src="artist.img.src"
      :srcset="artist.img.srcset"
      :alt="artist.name"
      class="mb-2"
      fluid
    />

    <figcaption class="mb-3">
      {{artist.name}}
    </figcaption>

  </figure>
</template>

<script>
export default {
  name: "ArtistListItem",
  props: {
    artist: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="css">
</style>

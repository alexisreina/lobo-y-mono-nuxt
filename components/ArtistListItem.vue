<template lang="html">
  <figure>

    <b-img
      :src="artist.photo"
      :alt="artist.name"
      :blank="!artist.photo"
      :width="!artist.photo ? 350 : null"
      :height="!artist.photo ? 275 : null"
      :rounded="!artist.photo"
      blank-color="#777"
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

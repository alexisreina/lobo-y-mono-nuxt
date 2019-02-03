<template lang="html">
  <figure>

    <b-img
      :src="artist.photo && require(`~/assets/${artist.photo.slice(1)}`)"
      :alt="artist.name"
      :blank="!artist.photo"
      :blank-color="!artist.photo ? '#e9e9e9' : null"
      :width="!artist.photo ? 350 : null"
      :height="!artist.photo ? 275 : null"
      :rounded="!artist.photo"
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

<template lang="html">
  <figure>

    <b-img
      :src="artist.img.src"
      :alt="artist.name"
      :blank="!artist.img.src"
      :width="!artist.img.src ? 350 : null"
      :height="!artist.img.src ? 275 : null"
      :rounded="!artist.img.src"
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

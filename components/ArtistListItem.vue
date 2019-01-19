<template lang="html">
  <figure class="">
    <b-img
      class="mb-2"
      fluid
      :src="artist.img.src"
      :srcset="artist.img.srcset"
      :alt="artist.name"
    />
    
    <figcaption class="mb-3">
      {{artist.name}}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "artist-list-item",
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

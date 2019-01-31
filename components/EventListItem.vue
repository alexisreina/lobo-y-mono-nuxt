<template lang="html">
  <nuxt-link
    :to="{ name: 'eventos-slug', params: { slug: event.slug, id: event.id } }"
  >
    <figure class="event-list-item">
      <b-img
        :src="event.image && require(`~/assets/${event.image.slice(1)}`)"
        :alt="event.title"
        :blank="!event.image"
        :width="!event.image ? 350 : null"
        :height="!event.image ? 260 : null"
        :rounded="!event.image"
        :blank-color="!event.image ? '#e9e9e9' : null"
        class="mb-2"
        fluid
      />

      <figcaption class="mb-2">
        {{event.title}}, {{event.location}}, {{event.date}}.
      </figcaption>
    </figure>
  </nuxt-link>
</template>

<script>
export default {
  name: "EventListItem",
  props: {
    event: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: inherit;
}
</style>

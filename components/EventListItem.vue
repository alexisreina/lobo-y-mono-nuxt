<template lang="html">
  <nuxt-link
    :to="{ name: 'eventos-slug', params: { slug: event.slug, id: event.id, next: event.next } }"
  >
    <figure class="event-list-item">
      <b-img
        :src="event.thumbnail && require(`~/assets/${event.thumbnail.slice(1)}`)"
        :alt="event.title"
        :blank="!event.thumbnail"
        :blank-color="!event.thumbnail ? '#e9e9e9' : null"
        width="400"
        height="267"
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

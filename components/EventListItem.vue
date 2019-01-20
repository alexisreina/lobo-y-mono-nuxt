<template lang="html">
  <nuxt-link
    :to="{ name: 'eventos-slug', params: { slug: event.slug } }"
  >
    <figure class="event-list-item">
      <b-img
        :src="event.image"
        :alt="event.title"
        :blank="!event.image"
        :rounded="!event.image"
        blank-color="#777"
        width="350"
        height="275"
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

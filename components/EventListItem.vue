<template lang="html">
  <nuxt-link
    :to="{ name: 'eventos-slug', params: { slug: event.slug } }"
  >
    <figure class="event-list-item">
      <b-img
        v-if="event.image"
        :src="require(`~/assets/${event.image.slice(1)}`)"
        :alt="event.title"
        class="mb-2"
        fluid
      />

      <b-img
        v-else
        class="mb-2"
        alt=""
        width="350"
        height="275"
        blank-color="#777"
        blank
        fluid
        rounded
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

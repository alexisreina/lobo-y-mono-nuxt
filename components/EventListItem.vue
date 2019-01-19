<template lang="html">
  <b-link :to="{ name: 'event', params: { id: event.id } }">
    <figure class="event-list-item">
      <b-img
        fluid
        class="mb-2"
        :src="event.img.src"
        :srcset="event.img.srcset"
      />
      <figcaption class="mb-2">
        {{event.title}}, {{event.place}}, {{event.date}}.
      </figcaption>
    </figure>
  </b-link>
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

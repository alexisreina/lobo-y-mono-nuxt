<template lang="html">
  <router-link :to="{ name: 'event', params: { id: event.id } }">
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
  </router-link>
</template>

<script>
export default {
  name: "events-list-item",
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

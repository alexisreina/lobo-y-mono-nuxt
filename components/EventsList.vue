<template lang="html">
  <section class="event-list">
    <b-container>
      <b-row>
        <b-col md="4" v-for="event in data" :key="event.id">
          <events-list-item :event="event" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import EventsListItem from "@/components/EventsListItem.vue";

export default {
  name: "events-list",
  components: {
    EventsListItem
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="css">
</style>

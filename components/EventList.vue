<template lang="html">
  <b-row>
    <b-col
      v-for="event in data"
      :key="event.id"
      md="4"
    >
      <event-list-item :event="event" />
    </b-col>
  </b-row>
</template>

<script>
import EventListItem from "@/components/EventListItem.vue";

export default {
  name: "EventList",
  components: {
    EventListItem
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

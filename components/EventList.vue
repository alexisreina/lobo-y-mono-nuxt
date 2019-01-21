<template lang="html">
  <b-row>
    <b-col
      v-for="event in list"
      :key="event.id"
      md="4"
    >
      <EventListItem :event="event" />
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
    list: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="css">
</style>

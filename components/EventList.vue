<template lang="html">
  <b-row>
    <b-col
      v-for="event in portfolio"
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
  computed: {
    portfolio() {
      return this.$store.state.portfolio.list;
    }
  }
};
</script>

<style lang="css">
</style>

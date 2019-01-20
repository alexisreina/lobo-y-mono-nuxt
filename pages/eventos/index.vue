<template lang="html">
  <div class="py-5">

    <header class="sr-only">
      <b-container>
        <h1>
          {{page.header}}
        </h1>

        <Markdown :content="page.intro" class="lead" />
      </b-container>
    </header>

    <main>
      <b-container>
        <EventList />
      </b-container>
    </main>

  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import EventList from "@/components/EventList.vue";

export default {
  name: "EventsPage",
  layout: "page",
  components: {
    Markdown,
    EventList
  },
  computed: {
    page() {
      return this.$store.state.events;
    }
  }
};
</script>

<style lang="css">
</style>

<template lang="html">
  <div class="py-5">
    <header>
      <b-container>
        <h1>
          {{$cms.pages.events.header}}
        </h1>

        <Markdown :content="$cms.pages.events.intro" class="lead" />
      </b-container>
    </header>

    <main>
      <b-container>
        <EventList :list="portfolio" />
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
    portfolio() {
      return Object.keys(this.$cms.portfolio)
        .sort((a, b) => {
          a = a.replace(/^(.{8})-(.{4})-(.{4})/, "$3-$2-$1");
          b = b.replace(/^(.{8})-(.{4})-(.{4})/, "$3-$2-$1");
          return a > b ? -1 : a < b ? 1 : 0;
        })
        .map(uuid => {
          return this.$cms.portfolio[uuid];
        });
    }
  }
};
</script>

<style lang="css">
</style>

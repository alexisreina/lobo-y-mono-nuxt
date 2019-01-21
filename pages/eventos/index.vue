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
        <EventList :list="portfolio.list" />
      </b-container>
    </main>

  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import EventList from "@/components/EventList.vue";

// Content
import page from "@/content/events.json";
import portfolio from "@/content/portfolio.json";

export default {
  name: "EventsPage",
  layout: "page",
  components: {
    Markdown,
    EventList
  },
  data() {
    return {
      page,
      portfolio
    };
  }
};
</script>

<style lang="css">
</style>

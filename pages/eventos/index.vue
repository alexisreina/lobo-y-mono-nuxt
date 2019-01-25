<template lang="html">
  <div class="py-5">
    <!-- <pre>{{log()}}</pre> -->
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
        <EventList :list="$cms.portfolio" />
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
  }
  // ,
  // computed: {
  //   page() {
  //     return this.$cms.pages.events;
  //   },
  //   portfolio() {
  //     return this.$cms.portfolio;
  //   }
  // }
  // mounted() {
  //   // eslint-disable-next-line
  //   console.log(this.$cms.portfolio);
  // },
  // methods: {
  //   log() {
  //     return this.$cms.portfolio;
  //   }
  // }
};
</script>

<style lang="css">
</style>

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
        <pre>{{$cms.portfolio._keys}}</pre>
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
  //   portfolio() {
  //     const uuids = Object.keys(this.$cms.portfolio);
  //     const sorted = uuids.sort((a, b) => {
  //       a = a.replace(/^(.{8})-(.{4})-(.{4})/, "$3-$2-$1");
  //       b = b.replace(/^(.{8})-(.{4})-(.{4})/, "$3-$2-$1");
  //       return a > b ? -1 : a < b ? 1 : 0;
  //     });
  //
  //     const _portfolio = sorted.map(uuid => this.$cms.portfolio[uuid]);
  //
  //     return _portfolio.map((item, index, all) => {
  //       const last = all.length - 1;
  //
  //       if (index < last) {
  //         // eslint-disable-next-line
  //         console.log(item);
  //         const idx = index + 1;
  //         item.next = all[idx].slug;
  //       }
  //
  //       return item;
  //     });
  //   }
  // }
};
</script>

<style lang="css">
</style>

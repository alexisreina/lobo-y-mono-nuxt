<template lang="html">
  <div class="page-events py-3 py-md-5">
    <header role="banner" class="container mb-3 mb-xl-5">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <h1 class="h2 mb-0">
            {{page.header}}
          </h1>

          <Markdown v-if="page.intro" :content="page.intro" />
        </div>
      </div>
    </header>

    <main role="main">
      <section class="container">
        <div class="row">

          <div
            v-for="event in $cms.portfolio"
            :key="event.id"
            class="col-md-6 col-lg-4"
          >

            <nuxt-link
              :to="{ name: 'portfolio-slug', params: { slug: event.slug } }"
              class="event-link"
            >

              <figure class="event-list-item">

                <img
                  :src="event.thumbnail && require(`~/assets/${event.thumbnail.slice(1)}`)"
                  :alt="event.title"
                  class="event-img img-fluid mb-2"
                  width="400"
                  height="267"
                >

                <figcaption class="mb-2 small">
                  {{event.title}}, {{event.location}}, {{event.date}}.
                </figcaption>

              </figure>

            </nuxt-link>

          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";

export default {
  name: "EventsPage",
  layout: "page",
  components: {
    Markdown
  },
  computed: {
    page() {
      return this.$cms.pages.events;
    }
  }
};
</script>

<style lang="scss" scoped>
.event-link {
  display: block;
  text-decoration: none;
  color: inherit;

  &:hover .event-img {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  }
}

.event-img {
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
  transition-duration: 200ms;
}
</style>

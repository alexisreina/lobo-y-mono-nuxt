<template lang="html">
  <div class="py-5">
    <header>
      <b-container>
        <h1>
          {{page.header}}
        </h1>

        <Markdown :content="page.intro" class="lead" />
      </b-container>
    </header>

    <main>
      <section class="container">
        <div class="row">

          <div
            v-for="event in $cms.portfolio"
            :key="event.id"
            class="col-md-6 col-lg-4"
          >

            <nuxt-link
              :to="{ name: 'eventos-slug', params: { slug: event.slug } }"
              class="link"
            >

              <figure class="event-list-item">

                <b-img
                  :src="event.thumbnail && require(`~/assets/${event.thumbnail.slice(1)}`)"
                  :alt="event.title"
                  :blank="!event.thumbnail"
                  :blank-color="!event.thumbnail ? '#e9e9e9' : null"
                  width="400"
                  height="267"
                  class="mb-2"
                  fluid
                />

                <figcaption class="mb-2">
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
.link {
  text-decoration: none;
  color: inherit;
}
</style>

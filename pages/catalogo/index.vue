<template lang="html">
  <div class="page-catalog  py-3 py-md-5">
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
          <div class="col-xl-10 offset-xl-1">
            <div class="row">

              <div
                v-for="event in $cms.catalog"
                :key="event.id"
                class="col-md-4 text-center mb-3"
              >

                <nuxt-link
                  :to="{ name: 'catalogo-slug', params: { slug: event.slug } }"
                  class="d-inline-block"
                >

                  <figure class="event-image">

                    <img
                      :src="event.thumbnail && require(`~/assets/${event.thumbnail.slice(1)}`)"
                      :alt="event.title"
                      class="img-fluid"
                      width="301"
                      height="246"
                    >

                  </figure>

                </nuxt-link>

              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";

export default {
  name: "CatalogPage",
  layout: "page",
  components: {
    Markdown
  },
  computed: {
    page() {
      return this.$cms.pages.catalog;
    }
  }
};
</script>

<style lang="scss" scoped>
$event-border-radius: 32px;
$event-border-width: 3px;

.event-image {
  border-radius: $event-border-radius;
  position: relative;
  display: inline-block;

  img {
    border-radius: $event-border-radius;
    transform: translate(5px, 5px);
  }

  &::before {
    content: "";
    border: $event-border-width solid $black;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: $event-border-radius;
    z-index: 1;
  }
}
</style>

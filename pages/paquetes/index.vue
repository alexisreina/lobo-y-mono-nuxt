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
          <div
            v-for="event in $cms.catalog"
            :key="event.id"
            class="col-md-4"
          >

            <nuxt-link
              :to="{ name: 'paquetes-slug', params: { slug: event.slug } }"
              class="d-block"
            >

              <figure class="event-image">

                <img
                  :src="event.thumbnail && require(`~/assets/${event.thumbnail.slice(1)}`)"
                  :alt="event.title"
                  class="img-fluid d-block"
                  width="210"
                  height="171"
                >

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
.event-image {
  border-radius: 30px;
  position: relative;
  display: inline-block;

  img {
    border-radius: 30px;
    transform: translate(6px, 6px);
  }

  &::before {
    content: "";
    border: 2px solid $black;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    z-index: 1;
  }
}
</style>

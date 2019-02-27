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
            >

              <figure>

                <img
                  :src="event.thumbnail && require(`~/assets/${event.thumbnail.slice(1)}`)"
                  :alt="event.title"
                  class="img-fluid mb-2"
                  width="400"
                  height="267"
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
export default {
  name: "CatalogPage",
  layout: "page",
  computed: {
    page() {
      return this.$cms.pages.catalog;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

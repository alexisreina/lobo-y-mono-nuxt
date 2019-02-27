<template lang="html">
  <div class="page-catalog-item">
    <!-- event header -->
    <header class="container" role="banner">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">

          <!-- event title -->
          <h1 class="text-capitalize text-center mb-4">
            {{event.title}}
          </h1>
          <!-- /event title -->

          <!-- event featured image -->
          <figure>
            <img
              v-if="event.image"
              :src="require(`~/assets/${event.image.slice(1)}`)"
              :alt="event.title"
              class="d-block mx-auto img-fluid"
            >

          </figure>
          <!-- /event featured image -->

        </div>
      </div>
    </header>
    <!-- /event header -->

    <main role="main">

      <!-- event description -->
      <section class="container mb-3">
        <div class="row">
          <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <Markdown :content="event.description" />
          </div>
        </div>
      </section>
      <!-- /event description -->

      <!-- event miscellaneus -->
      <section
        v-if="event.other && event.other.length"
        class="mb-5 container text-center"
      >
        <p
          v-for="(item, index) in event.other"
          :key="index"
          class="small mb-0"
        >
          {{item}}
        </p>
      </section>
      <!-- /event miscellaneus -->
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    event() {
      const uuid = Object.keys(this.$cms.catalog).find(
        uuid => this.$cms.catalog[uuid].slug === this.$route.params.slug
      );

      return this.$cms.catalog[uuid];
    }
  }
};
</script>

<style lang="css" scoped>
</style>

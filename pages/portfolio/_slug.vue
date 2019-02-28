<template lang="html">
  <div class="page-event py-5">
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
              :class="[event.caption ? 'mb-1' : 'mb-3']"
              class="d-block mx-auto img-fluid"
            >

            <figcaption v-if="event.caption" class="mb-3">
              <small class="text-muted">
                {{event.caption}}
              </small>
            </figcaption>

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
        v-if="event.miscellaneus && event.miscellaneus.length"
        class="mb-5 container text-center"
      >
        <p
          v-for="(item, index) in event.miscellaneus"
          :key="index"
          class="small mb-0"
        >
          {{item}}
        </p>
      </section>
      <!-- /event miscellaneus -->

      <!-- event gallery -->
      <section
        v-if="event.gallery && event.gallery.length"
        class="py-3 container"
      >
        <masonry
          :cols="3"
          :gutter="30"
        >
          <div
            v-for="(photo, index) in event.gallery"
            :key="index"
            style="margin-bottom:30px"
          >

            <b-img-lazy
              :src="photo && require(`~/assets/${photo.slice(1)}`)"
              fluid
            />

          </div>
        </masonry>
      </section>
      <!-- /event gallery -->

      <!-- event actions -->
      <section v-if="event.next || event.prev" class="container">
        <div class="row py-5">
          <div v-if="event.next" class="col-6">

            <LmButtonIcon
              :to="{ name: 'portfolio-slug', params: { slug: event.next.slug } }"
              :prev="true"
            >
              Anterior
            </LmButtonIcon>
          </div>

          <div
            v-if="event.prev"
            :class="{'offset-6':!event.next}"
            class="col-6 text-right"
          >

            <LmButtonIcon
              :to="{ name: 'portfolio-slug', params: { slug: event.prev.slug } }"
              :next="true"
            >
              Siguiente
            </LmButtonIcon>

          </div>
        </div>
      </section>
      <!-- /event actions -->

    </main>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import LmButtonIcon from "@/components/LmButtonIcon.vue";

export default {
  name: "EventPage",
  layout: "page",
  components: {
    Markdown,
    LmButtonIcon
  },
  computed: {
    event() {
      const uuid = Object.keys(this.$cms.portfolio).find(
        uuid => this.$cms.portfolio[uuid].slug === this.$route.params.slug
      );

      return this.$cms.portfolio[uuid];
    }
  }
};
</script>

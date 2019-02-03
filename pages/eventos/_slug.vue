<template lang="html">
  <div class="py-5">
    <!-- event header -->
    <header>
      <b-container>
        <b-row>
          <b-col
            md="10"
            offset-md="1"
            lg="8"
            offset-lg="2"
          >
            <!-- event title -->
            <h1 class="text-capitalize text-center mb-4">
              {{event.title}}
            </h1>
            <!-- /event title -->

            <!-- event featured image -->
            <figure>
              <b-img
                v-if="event.image"
                :src="require(`~/assets/${event.image.slice(1)}`)"
                :class="[event.caption ? 'mb-1' : 'mb-3']"
                class="d-block mx-auto"
                fluid
              />
              <figcaption v-if="event.caption" class="mb-3">
                <small class="text-muted">
                  {{event.caption}}
                </small>
              </figcaption>
            </figure>
            <!-- /event featured image -->

          </b-col>
        </b-row>
      </b-container>
    </header>
    <!-- /event header -->

    <main>
      <!-- event description -->
      <section class="mb-3">
        <b-container>
          <b-row>
            <b-col
              md="10"
              offset-md="1"
              lg="8"
              offset-lg="2"
            >
              <Markdown :content="event.description" />
            </b-col>
          </b-row>
        </b-container>
      </section>
      <!-- /event description -->

      <!-- event miscellaneus -->
      <section
        v-if="event.miscellaneus && event.miscellaneus.length"
        class="mb-5"
      >
        <b-container>
          <b-row>
            <b-col class="text-center">
              <div
                v-for="(item, index) in event.miscellaneus"
                :key="index"
                class="small block"
              >
                {{item}}
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>
      <!-- /event miscellaneus -->

      <!-- event gallery -->
      <section
        v-if="event.gallery && event.gallery.length"
        class="py-3"
      >
        <b-container>
          <masonry
            :cols="3"
            :gutter="30"
          >
            <div
              v-for="(photo, index) in event.gallery"
              :key="index"
              style="margin-bottom:30px"
            >
              <b-img
                :src="photo && require(`~/assets/${photo.slice(1)}`)"
                fluid
              />

            </div>
          </masonry>
        </b-container>
      </section>
      <!-- /event gallery -->

      <!-- event actions -->
      <section v-if="event.next || event.prev">
        <b-container>
          <b-row class="py-5">
            <b-col v-if="event.next">
              <LmButton
                :to="{ name: 'eventos-slug', params: { id: event.next.id, slug: event.next.slug } }"
                variant="primary"
              >
                Anterior
              </LmButton>
            </b-col>

            <b-col v-if="event.prev" class="text-right">
              <LmButton
                :to="{ name: 'eventos-slug', params: { id: event.prev.id, slug: event.prev.slug } }"
                variant="primary"
              >
                Siguiente
              </LmButton>
            </b-col>
          </b-row>
        </b-container>
      </section>
      <!-- /event actions -->
    </main>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import LmButton from "@/components/LmButton.vue";

export default {
  name: "EventPage",
  layout: "page",
  components: {
    Markdown,
    LmButton
  },
  computed: {
    event() {
      return this.$cms.portfolio[this.$route.params.id];
    }
  }
};
</script>

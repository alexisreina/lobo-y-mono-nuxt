<template lang="html">
  <div class="py-5">
    <!-- event title -->
    <header>
      <b-container>
        <b-row>
          <b-col
            md="10"
            offset-md="1"
            lg="8"
            offset-lg="2"
          >
            <h1 class="text-capitalize text-center mb-4">
              {{event.title}}
            </h1>

            <b-img
              v-if="event.image"
              :src="require(`~/assets/${event.image.slice(1)}`)"
              :class="[event.caption ? 'mb-1' : 'mb-3']"
              class="d-block mx-auto"
              fluid
            />

            <div v-if="event.caption" class="mb-3">
              <small class="text-muted">
                {{event.caption}}
              </small>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>

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

      <!-- event data -->
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

      <!-- event gallery -->
      <section
        v-if="event.gallery && event.gallery.length"
        class="py-3"
      >
        <b-container>
          <b-row>
            <b-col
              v-for="(photo, index) in event.gallery"
              :key="index"
              sm="4"
              class="mb-4"
            >

              <b-img-lazy
                :src="photo && require(`~/assets/${photo.slice(1)}`)"
                width="800"
                height="600"
                blank-color="#e9e9e9"
                blank
                fluid
              />

            </b-col>
          </b-row>
        </b-container>
      </section>

      <!-- event actions -->
      <section v-if="event.next || event.prev">
        <b-container>
          <b-row class="py-5">
            <b-col v-if="event.prev">
              <LmButton
                :to="event.prev"
                variant="primary"
              >
                Anterior
              </LmButton>
            </b-col>
            <b-col v-if="event.next" class="text-right">
              <LmButton
                :to="event.next"
                variant="primary"
              >
                Siguiente
              </LmButton>
            </b-col>
          </b-row>
        </b-container>
      </section>
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
      return this.$cms.portfolio.find(
        item => item.id === this.$route.params.id
      );
    }
  }
};
</script>

<style lang="css">
</style>

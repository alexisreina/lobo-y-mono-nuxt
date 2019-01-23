<!-- eslint-disable -->
<template lang="html">
  <div>
    <!-- event title -->
    <header class="py-5" style >
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
              class="d-block mx-auto"
              fluid
            />
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
      <section class="mb-5" v-if="event.miscellaneus.length">
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
      <section class="py-3" v-if="event.gallery.length">
        <b-container>
          <b-row>
            <b-col
              v-for="(photo, index) in event.gallery"
              :key="index"
              sm="4"
              class="mb-4"
            >

              <b-img-lazy
                :style="{ boxShadow: '0 6px 12px -3px  rgba(0,0,0,.32)'}"
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
      <section>
        <b-container>
          <b-row class="py-5">
            <b-col>
              <LmButton
                variant="primary"
              >
                Anterior
              </LmButton>
            </b-col>
            <b-col class="text-right">
              <LmButton
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

// Content
import portfolio from "@/content/portfolio.json";

export default {
  name: "EventPage",
  layout: "page",
  components: {
    Markdown,
    LmButton
  },
  computed: {
    event() {
      return portfolio.list.find(
        event => event.slug === this.$route.params.slug
      );
    }
  },
  methods: {
    onNext() {},
    onPrev() {}
  }
};
</script>

<style lang="css">
</style>

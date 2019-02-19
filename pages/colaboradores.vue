<template lang="html">
  <div class="page-collab py-3 py-md-5">
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
            v-for="artist in $cms.artists"
            :key="artist.id"
            class="col-md-6 col-lg-4"
          >
            <figure>

              <img
                :src="artist.photo && require(`~/assets/${artist.photo.slice(1)}`)"
                :alt="artist.name"
                class="mb-2 img-fluid"
              >

              <figcaption class="mb-3">
                {{artist.name}}
              </figcaption>

            </figure>
          </div>
        </div>
      </section>

      <section class="container py-5 text-md-center">
        <h2 class="h4">
          {{page.cta.title}}
        </h2>

        <div class="mx-auto" style="max-width:45rem">

          <Markdown
            :content="page.cta.description"
            class="mb-3"
          />

        </div>
      </section>
    </main>

  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";

export default {
  name: "CollabPage",
  layout: "page",
  components: {
    Markdown
  },
  computed: {
    page() {
      return this.$cms.pages.collaborators;
    }
  }
};
</script>

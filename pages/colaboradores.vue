<template lang="html">
  <div class="page-collab">
    <header class="py-3 pt-md-4">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 offset-xl-2">
            <h1 class="h2">
              {{page.header}}
            </h1>

            <p>
              {{page.intro}}
            </p>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section>
        <div class="container">
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
        </div>
      </section>

      <div class="container py-5 text-md-center">
        <h2 class="h4">
          {{page.cta.title}}
        </h2>

        <div class="mx-auto" style="max-width:45rem">
          <Markdown
            :content="page.cta.description"
            class="mb-5"
          />
        </div>

        <div v-if="page.cta.button.active" class="text-center">
          <LmButton
            :to="page.cta.button.link"
            variant="primary"
            size="lg"
          >
            {{page.cta.button.label}}
          </LmButton>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import LmButton from "@/components/LmButton.vue";

export default {
  name: "CollabPage",
  layout: "page",
  components: {
    Markdown,
    LmButton
  },
  computed: {
    page() {
      return this.$cms.pages.collaborators;
    }
  }
};
</script>

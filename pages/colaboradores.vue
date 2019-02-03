<template lang="html">
  <div page-colab>
    <header class="py-3 pt-md-4">
      <b-container>
        <b-row>
          <b-col
            xl="8"
            offset-xl="2"
          >
            <h1>
              {{$cms.pages.collaborators.header}}
            </h1>

            <p>
              {{$cms.pages.collaborators.intro}}
            </p>
          </b-col>
        </b-row>
      </b-container>
    </header>

    <main>
      <section>
        <b-container>
          <ArtistList :list="$cms.artists" />
        </b-container>
      </section>

      <b-container class="py-5 text-md-center">
        <h2>
          {{$cms.pages.collaborators.cta.title}}
        </h2>

        <div class="mx-auto" style="max-width:45rem">
          <Markdown
            :content="$cms.pages.collaborators.cta.description"
            class="mb-5"
          />
        </div>

        <div v-if="$cms.pages.collaborators.cta.button" class="text-center">
          <LmButton
            :to="$cms.pages.collaborators.cta.button.link"
            variant="primary"
            size="lg"
          >
            {{$cms.pages.collaborators.cta.button.label}}
          </LmButton>
        </div>
      </b-container>
    </main>

  </div>
</template>

<script>
import ArtistList from "@/components/ArtistList.vue";
import Markdown from "@/components/Markdown.vue";
import LmButton from "@/components/LmButton.vue";

export default {
  name: "CollabPage",
  layout: "page",
  components: {
    ArtistList,
    Markdown,
    LmButton
  }
};
</script>

<template lang="html">
  <div>
    <header class="py-3 pt-md-4">
      <b-container>
        <b-row>
          <b-col
            lg="8"
            offset-lg="0"
          >
            <h1>
              {{$cms.pages.collaborators.header}}
            </h1>

            <p class="lead">
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

      <b-container class="py-5">
        <h2>
          {{$cms.pages.collaborators.cta.title}}
        </h2>

        <Markdown
          :content="$cms.pages.collaborators.cta.description"
          class="lead mb-5"
        />

        <div class="text-center">
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

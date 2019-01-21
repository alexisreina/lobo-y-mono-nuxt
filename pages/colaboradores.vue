<template lang="html">
  <div>

    <header class="py-3">
      <b-container>
        <b-row>
          <b-col
            lg="8"
            offset-lg="0"
          >
            <h1>
              {{page.header}}
            </h1>

            <p class="lead">
              {{page.intro}}
            </p>
          </b-col>
        </b-row>
      </b-container>
    </header>

    <main>
      <section>
        <b-container>
          <ArtistList :list="artist.list" />
        </b-container>
      </section>

      <b-container class="py-5">
        <h2>
          {{page.cta.title}}
        </h2>

        <Markdown
          :content="page.cta.description"
          class="lead mb-5"
        />

        <div class="text-center">
          <LmButton
            :to="page.cta.button.link"
            variant="primary"
            size="lg"
          >
            {{page.cta.button.label}}
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

// Content
import page from "@/content/collaborators.json";
import artist from "@/content/artist.json";

export default {
  name: "CollabPage",
  layout: "page",
  components: {
    ArtistList,
    Markdown,
    LmButton
  },
  data() {
    return {
      page,
      artist
    };
  }
};
</script>

<style lang="css">
</style>

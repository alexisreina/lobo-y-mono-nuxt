<template lang="html">
  <div class="about">
    <header class="py-5 sr-only">
      <b-container>
        <h1>
          {{$cms.pages.about.header}}
        </h1>

        <p v-if="$cms.pages.about.intro">
          {{$cms.pages.about.intro}}
        </p>
      </b-container>
    </header>

    <main>
      <b-container class="py-5">
        <b-row>
          <b-col>
            <AboutValues :values="$cms.pages.about.values" />
          </b-col>
        </b-row>
      </b-container>

      <b-container class="py-3 py-md-5">
        <b-row class="mb-md-5">
          <b-col>
            <AboutPeople :team="$cms.pages.about.team" />
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import AboutPeople from "@/components/AboutPeople.vue";
import AboutValues from "@/components/AboutValues.vue";

export default {
  name: "AboutPage",
  layout: "page",
  components: {
    AboutPeople,
    AboutValues
  }
};
</script>

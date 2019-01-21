<!-- eslint-disable -->
<template>
  <div class="about">
    <header class="py-5 sr-only">
      <b-container>
        <h1>
          {{page.header}}
        </h1>

        <p v-if="page.intro">
          {{page.intro}}
        </p>
      </b-container>
    </header>

    <main>
      <b-container class="py-5">
        <b-row>
          <b-col lg="10" offset-lg="1">
            <AboutValues :values="page.values" />
          </b-col>
        </b-row>
      </b-container>

      <b-container class="py-3 py-md-5">
        <b-row class="mb-md-5">
          <b-col lg="10" offset-lg="1">
            <AboutPeople :team="page.team" />
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import AboutPeople from "@/components/AboutPeople.vue";
import AboutValues from "@/components/AboutValues.vue";

// Content
import page from "@/content/about.json";

export default {
  name: "AboutPage",
  layout: "page",
  components: {
    AboutPeople,
    AboutValues
  },
  data() {
    return {
      page
    };
  }
};
</script>

<style lang="css">
</style>

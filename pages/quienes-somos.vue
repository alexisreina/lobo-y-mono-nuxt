<!-- eslint-disable -->
<template>
  <div class="about">
    <header class="py-5 sr-only">
      <b-container>
        <h1>
          {{header}}
        </h1>
      </b-container>
    </header>

    <main>
      <b-container class="py-5">
        <b-row>
          <b-col lg="10" offset-lg="1">
            <AboutValues />
          </b-col>
        </b-row>
      </b-container>

      <b-container class="py-3 py-md-5">
        <b-row class="mb-md-5">
          <b-col lg="10" offset-lg="1">
            <AboutPeople />
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
  },
  computed: {
    header() {
      return this.$store.state.about.header;
    }
  }
};
</script>

<style lang="css">
</style>

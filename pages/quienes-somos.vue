<!-- eslint-disable -->
<template>
  <div class="about">
    <!--
    <header class="py-5">
      <b-container>
        <h1>{{header}}</h1>
      </b-container>
    </header>
    -->
    <main>
      <b-container class="pb-lg-3">
        <about-values />
      </b-container>

      <b-container class="pb-3">
        <about-people />
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
  data() {
    return {
      header: "Quienes Somos"
    };
  }
};
</script>

<style lang="css">
</style>

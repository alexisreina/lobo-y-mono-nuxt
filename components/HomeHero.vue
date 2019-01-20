<template lang="html">
  <b-row align-v="center">

    <b-col lg="6">
      <b-img
        :src="home.image"
        :blank="!home.image"
        width="450"
        height="450"
        blank-color="#d6d4d6"
        class="d-block mx-auto mb-3 mb-lg-0"
        rounded="circle"
        fluid
      />
    </b-col>

    <b-col lg="6" class="text-md-center text-lg-left">
      <h1 class="title h1 mb-3 text-uppercase mb-4">

        <span class="d-block mb-2">
          {{home.header}}
        </span>

        <TextRotator :words="words" />
      </h1>

      <Markdown :content="home.intro" class="intro" />

    </b-col>

  </b-row>
</template>

<script>
import TextRotator from "@/components/TextRotator.vue";
import Markdown from "@/components/Markdown.vue";

export default {
  name: "HomeHero",
  components: {
    TextRotator,
    Markdown
  },
  computed: {
    home() {
      return this.$store.state.home;
    },
    words() {
      return this.$store.state.rotator.words;
    }
  }
};
</script>

<style lang="scss" scoped>
.title,
.intro /deep/ p {
  color: $primary;
}

.title {
  letter-spacing: 0.05em;
  font-family: Schoolbell, cursive;
}
</style>

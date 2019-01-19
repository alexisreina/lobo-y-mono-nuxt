<!-- eslint-disable -->
<template lang="html">
  <header class="py-5" :class="$style.header">
    <b-container class="py-lg-3">
      <b-row align-v="center">
        <b-col lg="6">
          <b-img class="d-block mx-auto mb-3 mb-lg-0" :src="img.src" :srcset="img.srcset" fluid />
        </b-col>
        <b-col lg="6" class="text-md-center text-lg-left">
          <h1 class="h1 mb-3 text-uppercase mb-4" :class="$style.h1">
            <span class="d-block mb-2">{{header}}</span>
            <text-rotator :words="words" />
          </h1>
          <p
            v-html="lead"
            :class="$style.p"
            :key="lead.id"
          >
            {{lead.text}}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
import TextRotator from "@/components/TextRotator.vue";

export default {
  name: "HomeHero",
  components: {
    TextRotator
  },
  data() {
    return {
      words: ["Familiares", "Divertidos", "Inclusivos", "Diversos"],
      header: "Eventos Salvajemente",
      img: {
        src: "//via.placeholder.com/540x540",
        srcset: "//via.placeholder.com/1080x1080 2x"
      },
      lead: `Diseñamos eventos con carácter para todas las familias. Proponemos espacios de ocio temáticos en los que la tradición y las corrientes culturales actuales se funden.<br>Para lobos que hacen el mono y monos que hacen el lobo.`
    };
  }
};
</script>

<style module lang="scss">
.header {
  background-color: $black;
}

.h1,
.p {
  color: $primary;
}

.h1 {
  letter-spacing: 0.05em;
  font-family: Schoolbell, cursive;
}
</style>

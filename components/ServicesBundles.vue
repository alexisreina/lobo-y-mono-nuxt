<template lang="html">
  <div class="row align-items-lg-center flex-md-row-reverse">
    <div class="col-md-4 col-lg-6">
      <img
        :src="bundles.image && require(`~/assets/${bundles.image.slice(1)}`)"
        :alt="bundles.title"
        class="mx-auto d-block img-fluid mb-3 mb-md-4 mb-lg-0"
      >
    </div>

    <div class="col-md-8 col-lg-6">
      <div class="mx-auto" style="max-width:25rem">
        <h2 class="h4 mb-md-3">
          {{bundles.title}}
        </h2>

        <Markdown v-if="bundles.intro" :content="bundles.intro" />

        <ul v-if="bundles.list">
          <li
            v-for="(item, index) in links"
            :key="index"
          >
            <nuxt-link :to="{ name: 'paquetes-slug', params: { slug: item.slug } }">
              {{item.label}}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
export default {
  name: "ServiceBundles",
  components: {
    Markdown
  },
  props: {
    bundles: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      links: [
        {
          label: "Libroscopia",
          slug: "libroscopia"
        },
        {
          label: "Al fresquito",
          slug: "al-fresquito-en-familia"
        },
        {
          label: "Carnaval",
          slug: "carnavales"
        },
        {
          label: "En verano la cultura a la calle",
          slug: "en-verano-la-cultura-a-la-calle"
        },
        {
          label: "HUHA! Party",
          slug: "huha-party"
        },
        {
          label: "Convenciones en familia",
          slug: "convenciones-en-familia"
        },
        {
          label: "Re-concíliate",
          slug: "re-conciliate"
        }
      ]
    };
  }
};
</script>

<style lang="css" scoped>
</style>

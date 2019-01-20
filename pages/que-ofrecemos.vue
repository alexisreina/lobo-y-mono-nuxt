<template lang="html">
  <div>
    <header role="banner" class="bg-light">
      <b-container class="py-3 py-lg-4 text-center mb-3 mb-lg-4">
        <b-row>
          <b-col lg="10" offset-lg="1">
            <h1 class="mb-3">
              {{page.header}}
            </h1>

            <Markdown :content="page.intro" class="lead mb-0" />
          </b-col>
        </b-row>
      </b-container>
    </header>

    <section class="mb-lg-5">
      <b-container>
        <b-row>
          <b-col lg="10" offset-lg="1">
            <div
              v-for="item in page.list"
              :key="item.id"
            >
              <h3 class="h4">
                {{item.title}}
              </h3>

              <Markdown :content="item.description" />
            </div>


            <h4 class="h5">
              {{page.other.title}}
            </h4>

            <Markdown :content="page.other.description" />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section>
      <b-container>
        <b-row>
          <b-col lg="10" offset-lg="1">
            <ServiceBundles />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="bg-light">
      <b-container>
        <b-row>
          <b-col lg="10" offset-lg="1">
            <ServicesCta />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import ServiceBundles from "@/components/ServiceBundles";
import ServicesCta from "@/components/ServicesCta.vue";

export default {
  name: "ServicesPage",
  layout: "page",
  components: {
    Markdown,
    ServiceBundles,
    ServicesCta
  },
  computed: {
    page() {
      return this.$store.state.services;
    }
  }
};
</script>

<style lang="css">
</style>

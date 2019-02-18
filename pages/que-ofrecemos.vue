<template lang="html">
  <div class="py-3">
    <header role="banner">
      <div class="container">
        <div class="row">
          <b-col
            lg="10"
            xl="8"
            offset-lg="1"
            offset-xl="2"
          >
            <h1 class="h2 mb-3">
              {{page.header}}
            </h1>

            <Markdown v-if="page.intro" :content="page.intro" />
          </b-col>
        </div>
      </div>
    </header>

    <section class="mb-lg-5">
      <div class="container">
        <ServicesList :services="page.list" />
      </div>
    </section>

    <section class="mb-lg-5">
      <div class="container">
        <ServicesTailored :service="page.tailored" />
      </div>
    </section>

    <section class="mb-lg-5">
      <div class="container">
        <ServicesBundles :bundles="page.bundles" />
      </div>
    </section>

    <section class="mb-3 mb-lg-5">
      <div class="container">
        <ServicesOther :other="page.other" />
      </div>
    </section>

    <section class="py-5 text-center">
      <div class="container">
        <div class="row">
          <b-col xl="10" offset-xl="1">
            <LmButton
              to="/contacto"
              variant="primary"
              size="lg"
            >
              Contacta con nosotras
            </LmButton>
          </b-col>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import LmButton from "@/components/LmButton.vue";
import ServicesOther from "@/components/ServicesOther.vue";
import ServicesList from "@/components/ServicesList.vue";
import ServicesBundles from "@/components/ServicesBundles.vue";
// import ServicesCta from "@/components/ServicesCta.vue";
import ServicesTailored from "@/components/ServicesTailored.vue";

export default {
  name: "ServicesPage",
  layout: "page",
  components: {
    Markdown,
    LmButton,
    ServicesOther,
    ServicesList,
    ServicesBundles,
    // ServicesCta,
    ServicesTailored
  },
  computed: {
    page() {
      return this.$cms.pages.services;
    }
  }
};
</script>

<style lang="css">
</style>

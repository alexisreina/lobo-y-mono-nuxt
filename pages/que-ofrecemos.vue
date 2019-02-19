<template lang="html">
  <div class="page-services py-3 py-md-5">
    <header role="banner" class="container mb-3 mb-xl-5">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <h1 class="h2 mb-1">
            {{page.header}}
          </h1>

          <Markdown v-if="page.intro" :content="page.intro" />
        </div>
      </div>
    </header>

    <section class="container mb-3 mb-md-5">
      <ServicesList :services="page.list" />
    </section>

    <section class="container mb-3 mb-md-5">
      <ServicesBundles :bundles="page.bundles" />
    </section>

    <section class="container mb-3 mb-md-5">
      <ServicesTailored :service="page.tailored" />
    </section>

    <section class="container mb-3 mb-md-5">
      <ServicesOther :other="page.other" />
    </section>

    <section class="container py-5 text-center">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <LmButton
            to="/contacto"
            variant="primary"
            size="lg"
          >
            Contacta con nosotras
          </LmButton>
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

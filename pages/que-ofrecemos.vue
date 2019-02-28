<template lang="html">
  <div class="page-services pt-3 pt-md-5">
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

    <section class="container mb-3 mb-md-5 py-3 py-md-4">
      <ServicesBundles :bundles="page.bundles" />
    </section>

    <section class="container mb-3 mb-md-5 py-3 py-md-4">
      <ServicesTailored :service="page.tailored" />
    </section>

    <section class="container mb-3 mb-md-5 py-3 py-md-4">
      <ServicesOther :other="page.other" />
    </section>

    <section class="py-5 text-center section-cta">
      <div class="container py-5">
        <div class="mx-auto py-3" style="max-width: 33rem">
          <h3>
            Crea tu evento con nuestro configurador
          </h3>

          <p class="mb-5">
            Con nuestro configurador podrás obtener un presupuesto inmediato ajustado a tus preferencias.
          </p>

          <LmButton
            :to="{ name: 'crea-tu-evento' }"
            :fav="true"
            class="mb-3 mb-md-5"
            variant="primary"
            size="lg"
          >
            Crea tu evento
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

<style lang="scss" scoped>
.section-cta {
  background: url("~assets/svg/lym-pattern-pelos.svg");
}
</style>

<template lang="html">
  <div class="py-3">
    <header role="banner">
      <b-container>
        <b-row>
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
        </b-row>
      </b-container>
    </header>

    <section class="mb-lg-5">
      <b-container>
        <b-row>
          <b-col>
            <ServicesList :services="page.list" />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="bg-light mb-5">
      <b-container>
        <b-row>
          <b-col>
            <ServicesCta :cta="page.cta" />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="mb-lg-5">
      <b-container>
        <b-row>
          <b-col>
            <ServicesTailored :service="page.tailored" />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="mb-lg-5">
      <b-container>
        <b-row>
          <b-col>
            <ServicesBundles :bundles="page.bundles" />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="mb-3 mb-lg-5">
      <b-container>
        <b-row>
          <b-col>
            <ServicesOther :other="page.other" />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="py-5 text-center">
      <b-container>
        <b-row>
          <b-col xl="10" offset-xl="1">
            <LmButton
              to="/contacto"
              variant="primary"
              size="lg"
            >
              Contacta con nosotras
            </LmButton>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import LmButton from "@/components/LmButton.vue";
import ServicesOther from "@/components/ServicesOther.vue";
import ServicesList from "@/components/ServicesList.vue";
import ServicesBundles from "@/components/ServicesBundles.vue";
import ServicesCta from "@/components/ServicesCta.vue";
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
    ServicesCta,
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

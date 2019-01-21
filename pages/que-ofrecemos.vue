<template lang="html">
  <div>
    <header role="banner" class="bg-light">
      <b-container class="py-3 py-lg-4 text-center mb-3 mb-lg-5">
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
            <ServicesList :services="page.list" />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="bg-light mb-5">
      <b-container>
        <b-row>
          <b-col lg="10" offset-lg="1">
            <ServicesCta :cta="page.cta" />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="mb-lg-5">
      <b-container>
        <b-row>
          <b-col lg="10" offset-lg="1">
            <b-row align-v="center">
              <b-col md="6">
                <b-img
                  blank
                  blank-color="#777"
                  width="540"
                  height="325"
                  alt=""
                  rounded
                  fluid
                />
              </b-col>

              <b-col md="6">
                <h2>
                  EVENTOS A MEDIDA
                </h2>

                <p>
                  ¡Pero esto no es todo! si deseas que seamos tus nar-
                  radoras y demos forma a tu idea, contacta con no-
                  sotras. Pondremos toda nuestra experiencia y creativ-
                  idad a tu disposición, te ayudamos a que tu evento sea divertido, diferente y todo un éxito.
                </p>

              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="mb-lg-5">
      <b-container>
        <b-row>
          <b-col lg="10" offset-lg="1">
            <ServicesBundles :bundles="page.bundles" />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="py-5 bg-light">
      <b-container>
        <b-row>
          <b-col lg="10" offset-lg="1">
            <ServicesOther :other="page.other" />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="py-5 text-center">
      <b-container>
        <b-row>
          <b-col lg="10" offset-lg="1">
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

// Content
import page from "@/content/services.json";

export default {
  name: "ServicesPage",
  layout: "page",
  components: {
    Markdown,
    LmButton,
    ServicesOther,
    ServicesList,
    ServicesBundles,
    ServicesCta
  },
  data() {
    return {
      page
    };
  }
};
</script>

<style lang="css">
</style>

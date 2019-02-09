<template lang="html">
  <div class="page-configurator bg-light">
    <header class="py-5">
      <div class="container">
        <div
          class="text-md-center mx-auto"
          style="max-width:52rem"
        >

          <h1 class="h3">
            {{page.title}}
          </h1>

          <Markdown :content="page.intro" />
        </div>
      </div>
    </header>

    <section class="pb-5">
      <div class="container bg-white py-3 pb-5 py-md-5 mb-5 rounded">
        <div class="px-xl-5">
          <div class="row py-3 mb-lg-5">
            <div
              v-for="(step, idx) in [1,2,3,4]"
              :key="idx"
              class="col"
            >

              <div
                class="mx-auto rounded-circle d-flex justify-content-center align-items-center"
                :class="step === 1 ? 'bg-dark text-white' : 'bg-light'"
                style="width:75px;height:75px;"
              >
                <span class="text-bold lead">
                  {{step}}
                </span>
              </div>
            </div>
          </div>

          <div class="text-center py-3">
            <h2 class="mb-md-3">
              Forma literaria
            </h2>

            <p class="mb-lg-5">
              Elige el tipo de evento según la duración o complejidad que necesites.
            </p>

            <div class="row py-5">
              <div
                v-for="(item, idx) in [1,2,3,4]"
                :key="idx"
                class="col"
              >

                <div class="text-center">

                  <div
                    class="rounded-circle bg-light mx-auto mb-4"
                    style="width:120px;height:120px;"
                  />

                  <LmButton
                    variant="primary"
                  >
                    label {{item}}
                  </LmButton>

                </div>
              </div>
            </div>

            <div class="text-right py-3">
              <LmButton
                variant="primary"
              >
                Siguiente
              </LmButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import Markdown from "@/components/Markdown.vue";
import LmButton from "@/components/LmButton.vue";

export default {
  name: "ConfiguratorPage",
  layout: "page",
  components: {
    Markdown,
    LmButton
  },
  computed: {
    page() {
      return this.$cms.pages.configurator;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

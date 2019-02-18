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
              v-for="step in steps"
              :key="step.id"
              class="col"
            >

              <div
                class="mx-auto rounded-circle d-flex justify-content-center align-items-center mb-3"
                :class="step.id == currentStep.id ? 'bg-dark text-white' : 'bg-light'"
                style="width:75px;height:75px;"
              >
                <span class="text-bold lead" style="font-size:30px">
                  {{step.id}}
                </span>

              </div>

              <div class="text-center">
                <span>
                  {{step.label}}
                </span>
              </div>

            </div>
          </div>

          <div v-if="currentStep.id == 1" class="py-3">
            <div class="text-center">
              <h2 class="mb-md-3">
                {{currentStep.title}}
              </h2>

              <Markdown
                v-if="currentStep.description"
                :content="currentStep.description"
              />

            </div>

            <div class="row py-5">
              <div
                v-for="(option, key) in page.options"
                :key="key"
                class="col"
              >

                <div class="text-center">

                  <img
                    :src="require(`~/assets/${option.image.slice(1)}`)"
                    :alt="option.title"
                    class="img-fluid"
                  >

                  <LmButton
                    :variant="btnVariant(key)"
                    @click.native="selectEventType(key)"
                  >
                    {{option.title}}
                  </LmButton>

                </div>
              </div>
            </div>

            <div class="text-right py-3">
              <LmButton
                variant="primary"
                :disabled="!currentEvent"
                @click.native="nextStep()"
              >
                Siguiente
              </LmButton>
            </div>
          </div>

          <div v-if="currentStep.id == 2" class="py-3">
            <div class="text-center">
              <h2 class="mb-md-3">
                {{currentStep.title}}
              </h2>

              <Markdown
                v-if="currentStep.description"
                :content="currentStep.description"
              />

            </div>

            <div class="py-5">

              <div class="mb-3">
                <h4>
                  Planteamiento
                </h4>

                <b-button
                  v-for="intro in currentEvent.intro"
                  :key="intro.id"
                  :pressed.sync="intro.state"
                  variant="outline-primary"
                  class="mr-1 mb1"
                >
                  {{intro.title}}
                </b-button>
              </div>

              <div class="mb-3">
                <h4>
                  Nudo
                </h4>

                <b-button
                  v-for="nudo in currentEvent.nudo"
                  :key="nudo.id"
                  :pressed.sync="nudo.state"
                  variant="outline-info"
                  class="mr-1 mb1"
                >
                  {{nudo.title}}
                </b-button>
              </div>

              <div v-if="currentEvent.desenlace" class="mb-3">
                <h4>
                  Desenlace
                </h4>

                <b-button
                  v-for="desenlace in currentEvent.desenlace"
                  :key="desenlace.id"
                  :pressed.sync="desenlace.state"
                  variant="outline-warning"
                  class="mr-1 mb1"
                >
                  {{desenlace.title}}
                </b-button>
              </div>
            </div>

            <div class="row">
              <div class="col py-3">
                <LmButton
                  variant="primary"
                  @click.native="prevStep"
                >
                  Anterior
                </LmButton>
              </div>

              <div class="col text-right py-3">
                <LmButton
                  variant="primary"
                  :disabled="!hasSelectedItems"
                  @click.native="nextStep"
                >
                  Siguiente
                </LmButton>
              </div>
            </div>

          </div>

          <div v-if="currentStep.id == 3" class="text-center py-3">
            <h2 class="mb-md-3">
              {{currentStep.title}}
            </h2>

            <img
              :src="require(`~/assets/${selected.image.slice(1)}`)"
              :alt="selected.title"
              class="img-fluid"
            >

            <span class="d-block mb-4">
              {{selected.title}}
            </span>

            <div class="row pb-5 mb-5">
              <div v-if="selected.intro" class="col">
                <h3>
                  Planteamiento
                </h3>

                <div
                  v-for="intro in selected.intro"
                  :key="intro.id"
                  class="mb-1"
                >
                  <b-button
                    variant="primary"
                  >
                    {{intro.title}}
                  </b-button>
                </div>

              </div>

              <div v-if="selected.nudo" class="col">
                <h3>
                  Nudo
                </h3>

                <div
                  v-for="nudo in selected.nudo"
                  :key="nudo.id"
                  class="mb-1"
                >
                  <b-button
                    variant="info"
                  >
                    {{nudo.title}}
                  </b-button>
                </div>

              </div>

              <div v-if="selected.desenlace" class="col">
                <h3>
                  Desenlace
                </h3>

                <div
                  v-for="desenlace in selected.desenlace"
                  :key="desenlace.id"
                  class="mb-1"
                >
                  <b-button
                    variant="warning"
                  >
                    {{desenlace.title}}
                  </b-button>
                </div>

              </div>
            </div>

            <div class="row">
              <div class="col text-left py-3">
                <LmButton
                  variant="primary"
                  @click.native="prevStep"
                >
                  Anterior
                </LmButton>
              </div>

              <div class="col text-right py-3">
                <LmButton
                  variant="primary"
                  @click.native="nextStep"
                >
                  Ver presupuesto
                </LmButton>
              </div>
            </div>
          </div>

          <div v-if="currentStep.id == 4" class="text-center py-3">
            <h2 class="mb-md-3">
              {{currentStep.title}}
            </h2>

            <p class="display-3">
              {{budget}}
            </p>

            <Markdown
              v-if="currentStep.description"
              :content="currentStep.description"
            />

            <ContactForm />

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import LmButton from "@/components/LmButton.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "ConfiguratorPage",
  layout: "page",
  components: {
    Markdown,
    LmButton,
    ContactForm
  },
  data() {
    return {
      currentEvent: null,
      currentStep: null
    };
  },
  computed: {
    page() {
      return this.$cms.pages.configurator;
    },
    steps() {
      return this.$cms.pages.configurator.steps;
    },
    selected() {
      return Object.keys(this.currentEvent).reduce((all, item) => {
        if (["intro", "nudo", "desenlace"].indexOf(item) !== -1) {
          all[item] = this.currentEvent[item].filter(option => option.state);
        } else {
          all[item] = this.currentEvent[item];
        }
        return all;
      }, {});
    },
    hasSelectedItems() {
      return Object.keys(this.selected)
        .filter(key => ["intro", "nudo", "desenlace"].indexOf(key) !== -1)
        .every(item => this.selected[item].length > 0);
    },
    budget() {
      const subtotal = Object.keys(this.selected).reduce((amount, key) => {
        if (["intro", "nudo", "desenlace"].indexOf(key) !== -1) {
          this.selected[key].forEach(item => (amount += Number(item.price)));
        }
        return amount;
      }, 0);

      const comision = (subtotal * this.selected.comision) / 100;
      const total = subtotal + comision;

      return Math.round(total).toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR"
      });
    }
  },
  created() {
    this.currentStep = this.steps[0];
  },
  methods: {
    btnVariant(option) {
      const variants = {
        microcuento: "info",
        microrelato: "success",
        cuento: "warning",
        novela: "danger"
      };
      return variants[option];
    },
    selectEventType(key) {
      const selected = this.page.options[key];
      this.currentEvent = this.addOptionState(selected);
    },
    addOptionState(option) {
      return Object.keys(option).reduce((all, key) => {
        if (["intro", "nudo", "desenlace"].indexOf(key) !== -1) {
          all[key] = option[key].map(opt =>
            Object.assign({ state: false }, opt)
          );
        } else {
          all[key] = option[key];
        }
        return all;
      }, {});
    },
    nextStep() {
      const idx = this.steps.indexOf(this.currentStep);
      this.currentStep = this.steps[idx + 1];
    },
    prevStep() {
      const idx = this.steps.indexOf(this.currentStep);
      this.currentStep = this.steps[idx - 1];
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

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
      <div class="container bg-white sheet py-3 pb-5 py-md-5 mb-5">
        <div class="px-xl-5">
          <div class="row py-3 mb-lg-5">
            <div
              v-for="step in steps"
              :key="step.id"
              class="col"
            >

              <div
                class="stepper__indicator mx-auto mb-3"
                :class="[
                  step.id == currentStep.id ? 'bg-dark' : 'bg-light',
                  step.id == 1 ? 'isFirst' : null,
                  step.id == 4 ? 'isLast' : null
                ]"
              >
                <span class="stepper__number">
                  {{step.id}}
                </span>

              </div>

              <div class="text-center d-none d-md-block">
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

                <div class="mx-auto text-center" style="max-width:180px">

                  <img
                    :src="require(`~/assets/${option.image.slice(1)}`)"
                    :alt="option.title"
                    class="img-fluid"
                  >

                  <div class="px-xl-3">
                    <b-button
                      :variant="btnVariant(key)"
                      :pressed="(key == currentEventKey)"
                      block
                      @click="selectEventType(key)"
                    >
                      {{option.title}}
                    </b-button>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-right py-3">
              <LmButtonIcon
                variant="primary"
                :next="true"
                :disabled="!currentEvent"
                @click.native="nextStep()"
              >
                Siguiente
              </LmButtonIcon>
            </div>
          </div>

          <div v-if="currentStep.id == 2" class="py-3">
            <div class="text-center py-md-5 mx-auto" style="">
              <h2 class="mb-md-3">
                {{currentStep.title}}
              </h2>

              <Markdown
                v-if="currentStep.description"
                :content="currentStep.description"
              />

            </div>

            <div class="py-5">

              <div class="mb-5">
                <h4 class="mb-3 text-primary">
                  Planteamiento
                </h4>

                <b-button
                  v-for="intro in currentEvent.intro"
                  :key="intro.id"
                  :pressed.sync="intro.state"
                  variant="outline-primary"
                  class="mr-2 mb-2"
                >
                  {{intro.title}}
                </b-button>
              </div>

              <div class="mb-5">
                <h4 class="mb-3 text-info">
                  Nudo
                </h4>

                <b-button
                  v-for="nudo in currentEvent.nudo"
                  :key="nudo.id"
                  :pressed.sync="nudo.state"
                  variant="outline-info"
                  class="mr-2 mb-2"
                >
                  {{nudo.title}}
                </b-button>
              </div>

              <div v-if="currentEvent.desenlace" class="mb-5">
                <h4 class="mb-3 text-danger">
                  Desenlace
                </h4>

                <b-button
                  v-for="desenlace in currentEvent.desenlace"
                  :key="desenlace.id"
                  :pressed.sync="desenlace.state"
                  variant="outline-danger"
                  class="mr-2 mb-2"
                >
                  {{desenlace.title}}
                </b-button>
              </div>
            </div>

            <div class="row">
              <div class="col py-3">
                <LmButtonIcon
                  :prev="true"
                  @click.native="prevStep"
                >
                  Anterior
                </LmButtonIcon>
              </div>

              <div class="col text-right py-3">
                <LmButtonIcon
                  :disabled="!hasSelectedItems"
                  :next="true"
                  @click.native="nextStep"
                >
                  Siguiente
                </LmButtonIcon>
              </div>
            </div>

          </div>

          <div v-if="currentStep.id == 3" class="text-center py-3">
            <div class="curtain bg-light px-lg-5 mx-auto mb-5" style="max-width: 768px">
              <h2 class="my-3 my-md-5">
                {{currentStep.title}}
              </h2>

              <img
                :src="require(`~/assets/${selected.image.slice(1)}`)"
                :alt="selected.title"
                class="img-fluid"
              >

              <strong class="d-block mb-5 text-muted">
                {{selected.title}}
              </strong>

              <div class="row pb-5 mb-5">
                <div v-if="selected.intro" class="col">
                  <h3 class="h4 mb-3 text-primary">
                    Planteamiento
                  </h3>

                  <div
                    v-for="intro in selected.intro"
                    :key="intro.id"
                    class="mb-2"
                  >
                    <b-button
                      variant="primary"
                      block
                    >
                      {{intro.title}}
                    </b-button>
                  </div>

                </div>

                <div v-if="selected.nudo" class="col">
                  <h3 class="h4 mb-3 text-info">
                    Nudo
                  </h3>

                  <div
                    v-for="nudo in selected.nudo"
                    :key="nudo.id"
                    class="mb-2"
                  >
                    <b-button
                      variant="info"
                      block
                    >
                      {{nudo.title}}
                    </b-button>
                  </div>

                </div>

                <div v-if="selected.desenlace" class="col">
                  <h3 class="h4 mb-3 text-danger">
                    Desenlace
                  </h3>

                  <div
                    v-for="desenlace in selected.desenlace"
                    :key="desenlace.id"
                    class="mb-2"
                  >
                    <b-button
                      variant="danger"
                      block
                    >
                      {{desenlace.title}}
                    </b-button>
                  </div>

                </div>
              </div>
            </div>

            <div class="row">
              <div class="col text-left mt-5 py-3">
                <LmButtonIcon
                  :prev="true"
                  @click.native="prevStep"
                >
                  Anterior
                </LmButtonIcon>
              </div>

              <div class="col text-right mt-5 py-3">
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
            <h2 class="mb-md-5">
              {{currentStep.title}}
            </h2>

            <p class="budget text-center mx-auto my-3 my-md-5">
              {{budget}}
            </p>


            <Markdown
              v-if="currentStep.description"
              :content="currentStep.description"
              class="mx-auto mb-md-5"
              style="max-width:35rem"
            />

            <div class="row mb-5">
              <div class="col-md-10 offset-md-1">
                <FormCreate :event="selected" :budget="budget" />
              </div>
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
import LmButtonIcon from "@/components/LmButtonIcon.vue";
import FormCreate from "@/components/FormCreate.vue";

export default {
  name: "ConfiguratorPage",
  layout: "page",
  components: {
    Markdown,
    LmButton,
    LmButtonIcon,
    FormCreate
  },
  data() {
    return {
      currentEvent: null,
      currentEventKey: "",
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
        microcuento: "outline-info",
        microrelato: "outline-success",
        cuento: "outline-warning",
        novela: "outline-danger"
      };
      return variants[option];
    },
    selectEventType(key) {
      const selected = this.page.options[key];
      this.currentEvent = this.addOptionState(selected);
      this.currentEventKey = key;
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
.sheet {
  border-radius: 64px;
}

.stepper {
  &__indicator {
    position: relative;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 2px;
      background-color: $gray-100;
    }

    &::before {
      right: 125%;
      width: 7vw;
    }

    &::after {
      left: 125%;
      width: 7vw;
    }

    &.isFirst::before {
      display: none;
    }

    &.isLast::after {
      display: none;
    }
  }

  &__number {
    font-weight: normal;
    font-size: 18px;
    color: #fff;
  }

  @media (min-width: 768px) {
    &__indicator {
      width: 64px;
      height: 64px;

      &::before,
      &::after {
        height: 3px;
      }
    }

    &__number {
      font-size: 30px;
    }
  }
}

$budget-border-width: 3px;
$budget-border-radius: 9999em;

.budget {
  position: relative;
  font-size: 1.65rem;
  font-weight: bold;
  max-width: 25rem;
  padding: 0.75rem 2.25rem;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: $budget-border-width * -1;
    left: $budget-border-width * -1;
    width: calc(100% + #{$budget-border-width * 2});
    height: calc(100% + #{$budget-border-width * 2});
    border: $budget-border-width solid currentColor;
    border-radius: $budget-border-radius;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + #{$budget-border-width});
    height: calc(100% + #{$budget-border-width});
    z-index: -1;
    background-color: $gray-100;
    border-radius: $budget-border-radius;
    transform: translate($budget-border-width, $budget-border-width);
  }
}

.curtain {
  border-top: 2px solid $gray-300;
  background: url("~assets/svg/lym-config-pelos.svg") center bottom no-repeat;
  padding-bottom: 80px;
}
</style>

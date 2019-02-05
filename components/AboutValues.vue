<template lang="html">
  <section>
    <header class="pt-3 pt-md-5">
      <b-container>
        <h2 class="mb-5 text-center">
          {{values.title}}
        </h2>
      </b-container>
    </header>

    <div
      v-for="value in values.list"
      :key="value.id"
      :class="`bg-${value.id}`"
    >

      <b-container class="py-5">
        <b-row
          :class="[reverseRow(value)]"
          class="mb-3 mb-md-5 align-items-md-center"
        >
          <b-col md="6">

            <b-img
              :src="value.image && require(`~/assets/${value.image.slice(1)}`)"
              :alt="value.title"
              class="mb-3 mb-md-0"
              fluid
            />

          </b-col>

          <b-col md="6">

            <div class="mx-auto" style="max-width:25rem">
              <h3 class="h4 mb-md-3">
                {{value.title}}
              </h3>

              <Markdown :content="value.text" />

              <ul v-if="value.items">
                <li
                  v-for="item in value.items"
                  :key="item"
                >
                  {{item}}
                </li>
              </ul>
            </div>

          </b-col>
        </b-row>
      </b-container>

    </div>
  </section>
</template>

<script>
import Markdown from "@/components/Markdown.vue";

export default {
  name: "AboutValues",
  components: {
    Markdown
  },
  props: {
    values: {
      type: Object,
      required: true
    }
  },
  methods: {
    reverseRow(value) {
      const values = this.$props.values;
      return values.list.indexOf(value) % 2 === 0
        ? "flex-md-row-reverse"
        : null;
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-family {
  background-image: url("~assets/svg/lym-bg-2.svg"),
    url("~assets/svg/lym-pattern-dots.svg");
  background-size: cover, auto;
  background-position: left top, left -100%;
  background-repeat: no-repeat, repeat-x;
}

.bg-focus {
  background-image: url("~assets/svg/lym-pattern-dots.svg");
}

.bg-service {
  background-image: url("~assets/svg/lym-bg-1.svg"),
    url("~assets/svg/lym-pattern-dots.svg");
  background-size: cover, auto;
  background-position: left top, left 150%;
  background-repeat: no-repeat, repeat-x;
}
</style>

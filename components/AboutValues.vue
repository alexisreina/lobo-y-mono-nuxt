<template lang="html">
  <div>
    <h2 class="mb-5 text-uppercase text-center">
      {{values.title}}
    </h2>

    <b-row
      v-for="value in values.list"
      :key="value.id"
      :class="[reverseRow(value)]"
      class="mb-3 mb-md-5 align-items-md-center"
    >
      <b-col md="6">

        <b-img
          :src="value.image"
          :blank="!value.image"
          :width="!value.image ? 540 : null"
          :height="!value.image ? 325: null"
          :rounded="!value.image"
          blank-color="#777"
          class="mb-3 mb-md-0"
          fluid
        />

      </b-col>

      <b-col md="6">
        <h3 class="mb-md-3">
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

      </b-col>
    </b-row>
  </div>
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
      return values.list.indexOf(value) % 2 !== 0
        ? "flex-md-row-reverse"
        : null;
    }
  }
};
</script>

<style lang="css">
</style>

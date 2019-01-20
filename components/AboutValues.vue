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

        <p>
          {{value.text}}
        </p>

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
export default {
  name: "AboutValues",
  computed: {
    values() {
      return this.$store.state.about.values;
    }
  },
  methods: {
    reverseRow(value) {
      const values = this.$store.state.about.values;
      return values.list.indexOf(value) % 2 !== 0
        ? "flex-md-row-reverse"
        : null;
    }
  }
};
</script>

<style lang="css">
</style>

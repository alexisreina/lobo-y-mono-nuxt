<template lang="html">
  <b-navbar
    toggleable="lg"
    type="light"
    variant="light"
  >
    <b-navbar-toggle target="nav_collapse" />

    <b-navbar-brand to="/">
      {{brand}}
    </b-navbar-brand>

    <b-collapse id="nav_collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item
          v-for="item in menu"
          :key="item.id"
          :to="item.url"
        >
          {{item.label}}
        </b-nav-item>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "AppNavbar",
  computed: {
    menu() {
      return this.$store.state.general.menu;
    },
    brand() {
      return this.$store.state.general.site.name;
    }
  }
};
</script>

<style module lang="scss">
</style>

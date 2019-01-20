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
          v-for="nav in navList"
          :key="nav.id"
          :to="nav.url"
        >
          {{nav.label}}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      brand: "Lobo y Mono"
    };
  },
  computed: {
    navList() {
      return this.$store.state.menu.list;
    }
  }
};
</script>

<style module lang="scss">
</style>

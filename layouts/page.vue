<template>
  <div>
    <app-navbar />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar";
import AppFooter from "@/components/AppFooter";

export default {
  components: {
    AppNavbar,
    AppFooter
  }
};
</script>

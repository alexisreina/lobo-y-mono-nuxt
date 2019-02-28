<template>
  <div class="wrapper">
    <LmBanner v-if="$route.name == 'index'" />

    <AppNavbar
      :brand="$cms.settings.general.name"
      :menu="$cms.settings.menu.links"
    />

    <nuxt />

    <AppFooter
      :rrss="$cms.settings.social"
      :menus="$cms.settings.footer.navigation"
    />

  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar";
import AppFooter from "@/components/AppFooter";
import LmBanner from "@/components/LmBanner";

export default {
  components: {
    LmBanner,
    AppNavbar,
    AppFooter
  }
};
</script>

<style scoped>
.wrapper {
  overflow-x: hidden;
}
</style>

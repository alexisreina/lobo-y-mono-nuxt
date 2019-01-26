<template>
  <div>

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

export default {
  components: {
    AppNavbar,
    AppFooter
  }
};
</script>

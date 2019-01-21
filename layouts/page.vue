<template>
  <div>
    <AppNavbar
      :brand="data.site.name"
      :menu="data.menu"
    />

    <nuxt />

    <AppFooter
      :rrss="data.rrss"
      :menus="data.footer.navigation"
    />
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar";
import AppFooter from "@/components/AppFooter";

// Content
import data from "@/content/general.json";

export default {
  components: {
    AppNavbar,
    AppFooter
  },
  data() {
    return {
      data
    };
  }
};
</script>

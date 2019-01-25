<template lang="html">
  <footer class="bg-dark text-white">
    <b-container class="py-3">

      <!-- social media -->
      <AppFooterSocial
        :rrss="rrss"
        class="py-3 d-flex flex-row justify-content-center"
      />
      <!-- /social media -->

      <hr class="mb-4">

      <!-- footer navigation -->
      <b-row>
        <b-col
          lg="10"
          offset-lg="1"
        >
          <b-row>
            <b-col
              v-for="menu in menus"
              :key="menu.id"
              md="6"
              lg="3"
            >
              <h4 class="h5">
                {{menu.title}}
              </h4>

              <ul class="list-unstyled">
                <li
                  v-for="item in menu.list"
                  :key="item.id"
                >
                  <b-link
                    v-if="item.external"
                    :href="item.url"
                  >
                    {{item.label}}
                  </b-link>

                  <b-link
                    v-else
                    :to="item.url"
                  >
                    {{item.label}}
                  </b-link>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- footer navigation -->
    </b-container>
  </footer>
</template>

<script>
import AppFooterSocial from "@/components/AppFooterSocial";

export default {
  name: "AppFooter",
  components: {
    AppFooterSocial
  },
  props: {
    rrss: {
      type: Object,
      required: true
    },
    menus: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.icon {
  fill: $red;
  width: 32px;
  height: 32px;
}
</style>

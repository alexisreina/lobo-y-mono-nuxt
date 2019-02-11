<template lang="html">
  <footer class="text-white footer pb-5">
    <b-container class="py-3 py-md-5">
      <!-- partners -->
      <div v-if="$cms.partners">
        <Partners :partners="$cms.partners" />
      </div>
      <!-- /partners -->

      <!-- social media -->
      <AppFooterSocial
        v-if="false"
        :rrss="rrss"
        class="py-3 py-lg-5 d-flex flex-row justify-content-center"
      />

      <!-- /social media -->

      <hr class="hr mb-4 my-md-5">

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
              <h4 class="h5 mb-md-3 text-uppercase">
                {{menu.title}}
              </h4>

              <ul class="footer__list list-unstyled mb-3 mb-md-5">
                <li
                  v-for="item in menu.list"
                  :key="item.id"
                  class="footer__list-item mb-2 mb-md-3"
                >
                  <b-link
                    v-if="item.external"
                    :href="item.url"
                    class="footer__list-link"
                  >
                    {{item.label}}
                  </b-link>

                  <b-link
                    v-else
                    :to="item.url"
                    class="footer__list-link"
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
import Partners from "@/components/Partners.vue";

export default {
  name: "AppFooter",
  components: {
    AppFooterSocial,
    Partners
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
.footer {
  background-color: $black;
  background-image: url("~assets/svg/lym-bg-footer-izq.svg"),
    url("~assets/svg/lym-bg-footer-der.svg");
  background-position: bottom left, bottom right;
  background-repeat: no-repeat, no-repeat;

  &__list-link {
    color: $white;
  }
}
.hr {
  border-top-width: 1px;
  border-top-color: $white;
}
</style>

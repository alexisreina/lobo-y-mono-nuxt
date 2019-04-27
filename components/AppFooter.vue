<template lang="html">
  <footer class="text-white footer pb-5">
    <div class="container py-3 py-md-5">
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
      <div class="row mb-3">
        <div class="col-lg-10 offset-lg-1">
          <div class="row">
            <div
              v-for="menu in menus"
              :key="menu.id"
              class="col-md-6 col-lg-3"
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
                  <a
                    v-if="item.external"
                    :href="item.url"
                    class="footer__list-link"
                  >
                    {{item.label}}
                  </a>

                  <nuxt-link
                    v-else
                    :to="item.url"
                    class="footer__list-link"
                  >
                    {{item.label}}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- footer navigation -->

      <!-- footer copyright -->
      <div class="footer__copyright text-center small">
        <Markdown :content="copyright" />
      </div>
      <!-- /footer copyright -->
    </div>
  </footer>
</template>

<script>
import AppFooterSocial from "@/components/AppFooterSocial";
import Partners from "@/components/Partners.vue";
import Markdown from "@/components/Markdown.vue";

export default {
  name: "AppFooter",
  components: {
    AppFooterSocial,
    Partners,
    Markdown
  },
  props: {
    rrss: {
      type: Object,
      required: true
    },
    menus: {
      type: Array,
      required: true
    },
    copyright: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $black;
  background-image: url("~assets/svg/lym-bg-footer-izq.svg"),
    url("~assets/svg/lym-bg-footer-der.svg");
  background-position: bottom left, bottom right;
  background-repeat: no-repeat, no-repeat;

  &__copyright /deep/ a,
  &__list-link {
    color: $white;
  }
}
.hr {
  border-top-width: 1px;
  border-top-color: $white;
}
</style>

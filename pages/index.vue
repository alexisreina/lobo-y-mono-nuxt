<template lang="html">
  <div class="page-home pt-3 pt-md-5">
    <main role="main">
      <!-- services -->
      <section class="container mb-3 mb-md-5">

        <header class="row mb-3">
          <div class="col-lg-10 offset-lg-1">
            <h2 class="h3 mb-1">
              {{page.services.title}}
            </h2>

            <Markdown
              v-if="page.services.intro"
              :content="page.services.intro"
              class="mb-md-4"
            />

          </div>
        </header>

        <ServicesList :services="page.services.list" />

        <footer
          v-if="page.services.link"
          class="text-center mb-3 mb-md-5 py-3"
        >
          <nuxt-link :to="page.services.link.url">
            {{page.services.link.label}}
          </nuxt-link>
        </footer>

      </section>
      <!-- /services -->

      <section v-if="$cms.reviews" class="section-reviews pb-5">
        <div class="container">

          <h2 class="h3 mb-5">
            {{page.reviews.title}}
          </h2>

          <Makrdown
            v-if="page.reviews.description"
            :content="page.reviews.description"
          />

          <Reviews :reviews="reviews" />
        </div>
      </section>

      <section class="section-cta py-5">
        <div class="container py-3">
          <HomeCta :cta="page.cta" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import Reviews from "@/components/Reviews.vue";
import HomeCta from "@/components/HomeCta.vue";
import ServicesList from "@/components/ServicesList.vue";

export default {
  name: "HomePage",
  layout: "page",
  components: {
    Markdown,
    Reviews,
    HomeCta,
    ServicesList
  },
  computed: {
    page() {
      return this.$cms.pages.home;
    },
    reviews() {
      return Object.keys(this.$cms.reviews).reduce((filtered, key) => {
        if (this.$cms.reviews[key].show_in_home) {
          filtered[key] = this.$cms.reviews[key];
        }
        return filtered;
      }, {});
    }
  }
};
</script>

<style lang="scss" scoped>
.section-reviews {
  background-image: url("~assets/svg/lym-pattern-hojas.svg");
}
.section-cta {
  background-image: url("~assets/svg/lym-pattern-pelos.svg");
}
</style>

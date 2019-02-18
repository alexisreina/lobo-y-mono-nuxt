<template lang="html">
  <div class="page-home">
    <main>
      <section class="container py-5">
        <div class="row">
          <div class="col">
            <HomeServices :services="page.services" />
          </div>
        </div>
      </section>

      <section v-if="$cms.reviews" class="section-reviews pb-5">
        <div class="container-fluid">
          <h2 class="h3 mb-5">
            {{page.reviews.title}}
          </h2>

          <Makrdown
            v-if="page.reviews.description"
            :content="page.reviews.description"
          />

          <Reviews :reviews="$cms.reviews" />
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
import HomeServices from "@/components/HomeServices";
import Reviews from "@/components/Reviews";
import HomeCta from "@/components/HomeCta";

export default {
  name: "HomePage",
  layout: "page",
  components: {
    HomeServices,
    Reviews,
    HomeCta
  },
  computed: {
    page() {
      return this.$cms.pages.home;
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

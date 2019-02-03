<template lang="html">
  <div class="page-home">
    <main>
      <section class="py-5">
        <b-container>
          <b-row>
            <b-col>
              <HomeServices :services="$cms.pages.home.services" />
            </b-col>
          </b-row>
        </b-container>
      </section>

      <section v-if="$cms.reviews" class="section-reviews pb-5">
        <b-container>
          <h2 class="h3 mb-5">
            {{$cms.pages.home.reviews.title}}
          </h2>
          <Reviews :reviews="$cms.reviews" />
        </b-container>
      </section>

      <section class="section-cta py-5">
        <b-container class="py-3">
          <HomeCta :cta="$cms.pages.home.cta" />
        </b-container>
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

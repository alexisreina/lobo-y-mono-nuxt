<template lang="html">
  <div class="home">
    <!-- <header class="header py-5">
      <b-container class="py-lg-3">
        <HomeHero
          :title="$cms.pages.homeheader"
          :intro="$cms.pages.homeintro"
          :image="$cms.pages.homeimage"
          rotator
        />
      </b-container>
    </header> -->

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

      <section class="pb-5">
        <b-container>
          <Reviews :reviews="$cms.reviews.list" />
        </b-container>
      </section>

      <section class="py-5 bg-light">
        <b-container class="py-3">
          <HomeCta :cta="$cms.pages.home.cta" />
        </b-container>
      </section>

      <!-- <section class="py-5">
        <b-container>
          <home-event-gallery />
        </b-container>
      </section> -->

      <!-- <section class="py-5 bg-light">
        <b-container>
          <subscribe />
        </b-container>
      </section> -->

      <section class="py-4 bg-dark">
        <b-container>
          <Partners :partners="$cms.partners.list" />
        </b-container>
      </section>
    </main>
  </div>
</template>

<script>
// import HomeHero from "@/components/HomeHero.vue";
import HomeServices from "@/components/HomeServices";
import Reviews from "@/components/Reviews";
import HomeCta from "@/components/HomeCta";
// import HomeEventNext from "@/components/HomeEventNext";
// import HomeEventGallery from "@/components/HomeEventGallery";
// import Subscribe from "@/components/Subscribe";
import Partners from "@/components/Partners";

export default {
  name: "HomePage",
  layout: "page",
  components: {
    // HomeHero,
    HomeServices,
    Reviews,
    HomeCta,
    // HomeEventNext,
    // HomeEventGallery,
    // Subscribe,
    Partners
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: $black;
}
</style>

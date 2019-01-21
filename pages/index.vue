<template>
  <div class="home">
    <!-- <header class="header py-5">
      <b-container class="py-lg-3">
        <HomeHero
          :title="page.header"
          :intro="page.intro"
          :image="page.image"
          rotator
        />
      </b-container>
    </header> -->

    <main>
      <section class="py-5">
        <b-container>
          <b-row>
            <b-col>
              <HomeServices :services="page.services" />
            </b-col>
          </b-row>
        </b-container>
      </section>

      <section class="pb-5">
        <b-container>
          <Reviews :reviews="reviews.list" />
        </b-container>
      </section>

      <section class="py-5 bg-light">
        <b-container class="py-3">
          <HomeCta :cta="page.cta" />
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

      <section class="py-4">
        <b-container>
          <Partners :partners="partners.list" />
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

// Content
import page from "@/content/home.json";
import reviews from "@/content/reviews.json";
import partners from "@/content/partners.json";

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
  },
  data() {
    return {
      page,
      reviews,
      partners
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: $black;
}
</style>

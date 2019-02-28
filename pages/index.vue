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
          <nuxt-link :to="page.services.link.url" class="link">
            {{page.services.link.label}}
          </nuxt-link>
        </footer>

      </section>
      <!-- /services -->

      <section v-if="$cms.reviews" class="section-reviews pb-5">
        <div class="container py-3 py-md-5">

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
        <img class="hand-left d-none d-lg-block" src="~/assets/svg/lym-mano-lobo.svg" alt="">
        <img class="hand-right d-none d-lg-block" src="~/assets/svg/lym-mano-mono.svg" alt="">
        <div class="container py-3 py-md-5">
          <div class="d-xs-flex flex-xs-row align-items-xs-center justify-content-xs-center py-md-5">
            <div class="py-5 text-center">
              <img class="sparkle d-none d-lg-block" src="~/assets/svg/lym-chispa.svg" alt="">
              <LmButton
                :to="page.cta.link"
                :fav="true"
                variant="primary"
                size="lg"
              >
                {{page.cta.label}}
              </LmButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import LmButton from "@/components/LmButton.vue";
import Reviews from "@/components/Reviews.vue";
import ServicesList from "@/components/ServicesList.vue";

export default {
  name: "HomePage",
  layout: "page",
  components: {
    Markdown,
    LmButton,
    Reviews,
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
@keyframes push {
  0% {
    transform: translate(0, 0);
  }
  65% {
    transform: translate(15px, 0);
  }
}

@keyframes pull {
  0% {
    transform: translate(0, 0);
  }
  65% {
    transform: translate(-15px, 0);
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
    transform: scale(0.97) translate(-50%, -50%);
  }
  65% {
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.section-reviews {
  background-image: url("~assets/svg/lym-pattern-hojas.svg");
}
.section-cta {
  background-image: url("~assets/svg/lym-pattern-pelos.svg");
  position: relative;

  .hand-left,
  .hand-right {
    position: absolute;
    width: 50vw;
    max-width: 775px;
  }

  .hand-left {
    left: -95px;
    bottom: -95px;
  }

  .hand-right {
    right: -95px;
    top: -95px;
  }

  .sparkle {
    position: absolute;
    width: 196px;
    height: auto;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform-origin: center;
    transform: translate(-50%, -50%);
  }

  &:hover {
    .hand-left {
      animation: push 2s infinite;
    }
    .hand-right {
      animation: pull 2s infinite;
    }
    .sparkle {
      animation: appear 2s infinite;
    }
  }
}
.link {
  text-decoration: underline;
  font-weight: bold;
}
</style>

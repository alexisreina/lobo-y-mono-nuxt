<template lang="html">
  <div class="page-collab py-3 py-md-5">
    <header role="banner" class="container mb-3 mb-xl-5">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <h1 class="h2 mb-0">
            {{page.header}}
          </h1>

          <Markdown v-if="page.intro" :content="page.intro" />
        </div>
      </div>
    </header>

    <main role="main">
      <section class="container">
        <div class="row">
          <div
            v-for="artist in $cms.artists"
            :key="artist.id"
            class="col-md-6 col-lg-4"
          >
            <figure class="artist mb-2">

              <img
                :src="artist.photo && require(`~/assets/${artist.photo.slice(1)}`)"
                :alt="artist.name"
                class="artist__img img-fluid"
              >

              <div
                v-if="artist.description || artist.link"
                class="artist__overlay small"
              >
                <p
                  v-if="artist.description"
                  class="text-white"
                >
                  {{artist.description}}
                </p>

                <div class="text-center mb-1">
                  <a
                    v-if="artist.link"
                    :href="artist.link"
                    target="_blank"
                    class="artist__link"
                  >
                    <span class="artist__link-text">
                      Visita su web
                    </span>
                    &nbsp;
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="#fff"
                    >
                      <path
                        d="M30.307,18.279c0.002-0.562-0.322-1.079-0.752-1.423c-2-1.592-4.035-3.104-6.135-4.404
                    		c-1.312-0.812-1.953,1.543-0.639,2.357c1.377,0.853,2.725,1.799,4.053,2.795c-0.01,0.004-0.02,0.007-0.031,0.011
                    		c0.012,0.006,0.025,0.019,0.035,0.028c0.023,0.008,0.043,0.007,0.066,0.02c0.002,0.003,0.016,0.051,0.035,0.132
                    		c-5.027,0.684-12.184,6.281-15.041,10.108c-1.137,1.521,1.787,2.521,2.779,1.191c2.152-2.881,8.744-8.24,12.553-8.684
                    		c0.029-0.004,0.051-0.013,0.078-0.02c-0.727,2.094-1.438,4.195-2.48,6.035c-0.723,1.273,1.076,3.101,1.801,1.825
                    		c1.578-2.786,2.457-6.131,3.666-9.213C30.383,18.81,30.377,18.542,30.307,18.279"
                      />
                      <path
                        d="M21,41.75C9.559,41.75,0.25,32.441,0.25,21S9.559,0.25,21,0.25S41.75,9.559,41.75,21S32.441,41.75,21,41.75z M21,2.25
                    		C10.661,2.25,2.25,10.661,2.25,21S10.661,39.75,21,39.75S39.75,31.339,39.75,21S31.339,2.25,21,2.25z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </figure>
            <figcaption class="mb-3">
              {{artist.name}}
            </figcaption>
          </div>
        </div>
      </section>

      <section class="container py-5 text-md-center">
        <h2 class="h4">
          {{page.cta.title}}
        </h2>

        <div class="mx-auto" style="max-width:45rem">

          <Markdown
            :content="page.cta.description"
            class="mb-3"
          />

        </div>
      </section>
    </main>

  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";

export default {
  name: "CollabPage",
  layout: "page",
  components: {
    Markdown
  },
  computed: {
    page() {
      return this.$cms.pages.collaborators;
    }
  }
};
</script>

<style lang="scss" scoped>
.artist {
  position: relative;
  display: block;
  cursor: pointer;

  &__img {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
    transition-duration: 200ms;
  }

  &__link {
    text-align: center;
    color: #fff;

    &:hover {
      text-decoration: none;
    }
  }

  &__link-text {
    display: inline-block;
    margin-bottom: 1px;
    border-bottom: 1px solid transparent;
  }

  &__link:hover &__link-text {
    border-color: #fff;
  }

  &__overlay {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 15px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgba($black, 0.8);
    transition-duration: 100ms;
  }

  &:hover &__overlay {
    visibility: visible;
    opacity: 1;
  }

  &:hover img {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  }
}
</style>

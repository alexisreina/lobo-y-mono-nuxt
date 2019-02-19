<template lang="html">
  <div class="page-about">
    <header role="banner" class="container py-5 sr-only">
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
      <section>
        <header class="container pt-3 pt-md-5">
          <h2 class="mb-3 mb-md-5 text-center">
            {{page.values.title}}
          </h2>
        </header>

        <div
          v-for="value in page.values.list"
          :key="value.id"
          :class="`bg-${value.id}`"
        >

          <div class="container py-3">
            <div
              :class="[reverseRow(value)]"
              class="row align-items-md-center"
            >
              <div class="col-md-4 col-lg-6">
                <img
                  :src="value.image && require(`~/assets/${value.image.slice(1)}`)"
                  :alt="value.title"
                  class="img-fluid d-block mx-auto pt-3 mb-3 pt-md-0 mb-md-0 "
                >
              </div>

              <div class="col-md-8 col-lg-6">

                <div class="mx-auto mb-4" style="max-width:25rem">
                  <h3 class="h4 mb-md-3">
                    {{value.title}}
                  </h3>

                  <Markdown :content="value.text" />

                  <ul v-if="value.items">
                    <li
                      v-for="item in value.items"
                      :key="item"
                    >
                      {{item}}
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="container py-3 py-md-5 mb-md-5">
        <AboutPeople :team="page.team" />
      </section>

    </main>
  </div>
</template>

<script>
import AboutPeople from "@/components/AboutPeople.vue";
import Markdown from "@/components/Markdown.vue";

export default {
  name: "AboutPage",
  layout: "page",
  components: {
    AboutPeople,
    Markdown
  },
  computed: {
    page() {
      return this.$cms.pages.about;
    }
  },
  methods: {
    reverseRow(value) {
      const values = this.$cms.pages.about.values;
      return values.list.indexOf(value) % 2 === 0
        ? "flex-md-row-reverse"
        : null;
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-family {
  background-image: url("~assets/svg/lym-curve-top-white.svg");
  background-position: left top;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: #f5f4ed;
}

.bg-focus {
  background-image: url("~assets/svg/lym-curve-bottom-blue.svg"),
    url("~assets/svg/lym-curve-top-cream.svg"),
    url("~assets/svg/lym-pattern-dots.svg");
  background-position: left 101%, left top, left top;
  background-size: 100%, 100%, auto;
  background-repeat: no-repeat, no-repeat, repeat;
  background-color: #fff;
  padding: 5rem 0;
}

.bg-service {
  background-image: url("~assets/svg/lym-curve-bottom-white.svg");
  background-position: left 101%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: #ebf2f1;
}
</style>

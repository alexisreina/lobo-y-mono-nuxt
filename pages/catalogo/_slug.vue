<template lang="html">
  <div :class="[theme]" class="page-catalog-item py-5">
    <!-- event header -->
    <header class="container" role="banner">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">

          <!-- event title -->
          <h1 class="text-capitalize text-center mb-4 sr-only">
            {{event.title}}
          </h1>
          <!-- /event title -->

          <!-- event featured image -->
          <figure>

            <img
              v-if="event.image"
              :src="require(`~/assets/${event.image.slice(1)}`)"
              :alt="event.title"
              class="d-block mx-auto img-fluid mb-3"
            >

          </figure>
          <!-- /event featured image -->

        </div>
      </div>
    </header>
    <!-- /event header -->

    <main role="main">

      <!-- event description -->
      <section class="container mb-3">
        <div class="row">
          <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2" :style="{ backgroundColor: event.theme == 'huha' ? '#231f20' : null }">
            <Markdown class="event-description" :content="event.description" />
          </div>
        </div>
      </section>
      <!-- /event description -->

      <!-- event miscellaneus -->
      <section
        v-if="event.other && event.other.length"
        class="mb-5 container text-center"
      >
        <p
          v-for="(item, index) in event.other"
          :key="index"
          class="small mb-0"
        >
          {{item}}
        </p>
      </section>
      <!-- /event miscellaneus -->

    </main>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";

export default {
  name: "CatalogItemPage",
  layout: "page",
  components: {
    Markdown
  },
  computed: {
    event() {
      const uuid = Object.keys(this.$cms.catalog).find(
        uuid => this.$cms.catalog[uuid].slug === this.$route.params.slug
      );

      return this.$cms.catalog[uuid];
    },
    theme() {
      const theme = this.event.theme;
      return `theme-${theme}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.theme-fresquito {
  background: url("~assets/svg/lym-pattern-estrellas.svg") #cae0e6;
}

.theme-carnaval {
  background-color: #643b46;
  color: #fff;
}

.theme-verano {
  background-color: #f5f1ea;
}

.theme-huha {
  background: url("~assets/svg/lym-pattern-huha.svg") #231f20;
  color: #fff;
}

.theme-libroscopia {
  background-color: #d6d5d6;
}

.theme-convenciones {
  background-color: #2f333f;
  color: #fff;
}

.theme-reconcilia {
  background-image: repeating-linear-gradient(
    #fff,
    #fff 50px,
    #556db4 50px,
    #556db4 51px
  );
}

.event-description {
  & /deep/ ul {
    list-style-type: none;
    > li:before {
      margin-left: -18px;
      padding-right: 10px;
      font-size: 8px;
      vertical-align: middle;
      content: "♥";
    }
  }
}
</style>

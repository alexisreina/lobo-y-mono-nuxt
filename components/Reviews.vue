<template lang="html">
  <div class="row">
    <div
      v-for="review in reviews"
      :key="review.id"
      lg="4"
      class="col-md-6 col-lg-4 mb-md-0"
    >
      <div class="review mx-auto mb-3">
        <div class="review-body">
          <Markdown :content="review.text" />
        </div>

        <div class="review-footer mt-auto d-flex flex-row align-items-center bg-light">
          <img
            :src="review.image && require(`~/assets/${review.image.slice(1)}`)"
            :alt="review.title"
            class="d-block mr-3 rounded-circle"
            width="52"
            height="52"
          >

          <div class="py-1">
            <p class="mb-0">
              {{review.title}}
            </p>

            <Markdown
              :content="review.intro"
              class="review-info small"
            />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Markdown from "~/components/Markdown.vue";

export default {
  name: "Reviews",
  components: {
    Markdown
  },
  props: {
    reviews: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
$review-border-radius: 64px;
$review-max-width: 20rem;

.review {
  position: relative;
  max-width: $review-max-width;
  background-color: $white;
  border-radius: $review-border-radius;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: $review-border-radius;
    border: 3px solid $black;
  }

  &::after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 100%;
    height: 100%;
    border: 3px solid $black;
    background-color: $white;
    border-radius: $review-border-radius;
    z-index: -1;
  }
}

.review-footer {
  border-bottom-left-radius: $review-border-radius;
  border-bottom-right-radius: $review-border-radius;
  padding: 1.5rem;
}

.review-body {
  background-color: $white;
  border-top-left-radius: $review-border-radius;
  border-top-right-radius: $review-border-radius;
  padding: 3rem 1.5rem 1.5rem;
}

.review-info /deep/ p {
  margin-bottom: 0.25rem;
}

.review-body /deep/ blockquote {
  margin-bottom: 0;
}

.review-body /deep/ p {
  margin-bottom: 0;
  font-size: 1.05rem;
  font-weight: 800;

  &::before {
    content: "“";
  }

  &::after {
    content: "”";
  }
}
</style>

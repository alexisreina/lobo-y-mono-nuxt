<template lang="html">
  <b-row>
    <b-col
      v-for="review in reviews"
      :key="review.id"
      md="6"
      class="mb-3 mb-md-0"
    >
      <div class="review mx-auto border rounded">
        <div class="pt-4 px-2 px-lg-4 pt-lg-4 mb-3 rounded-top">
          <Markdown class="review-body" :content="review.text" />
        </div>

        <div class="p-4 d-flex flex-row align-items-center bg-light rounde-bottom">
          <b-img
            :src="review.image && require(`~/assets/${review.image.slice(1)}`)"
            :alt="review.title"
            :blank="!review.image"
            :blank-color="!review.image ? '#e03153' : null"
            width="52"
            height="52"
            rounded="circle"
            class="d-block mr-3"
          />

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
    </b-col>
  </b-row>
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
.review {
  max-width: 25rem;
}

.review-info /deep/ p {
  margin-bottom: 0.25rem;
}

.review-body /deep/ p {
  margin-bottom: 0;
  font-size: 1.25rem;
  font-weight: bold;

  &::before {
    content: "“";
  }

  &::after {
    content: "”";
  }
}
</style>

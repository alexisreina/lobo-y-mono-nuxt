<template lang="html">
  <b-row>
    <b-col
      v-for="review in reviews"
      :key="review.id"
      md="6"
      class="mb-3 mb-md-0"
    >
      <div class="review p-3 p-lg-4 bg-light mx-auto rounded">

        <Markdown class="review-body" :content="review.text" />

        <div class="pt-4 d-flex flex-row align-items-center">
          <b-img
            :src="review.author.photo"
            :alt="review.author.name"
            :blank="!review.author.photo"
            blank-color="#777"
            width="52"
            height="52"
            rounded="circle"
            class="d-block mr-3"
          />

          <div>
            <p class="mb-0">
              {{review.author.name}}
            </p>

            <Markdown class="review-info small" :content="review.author.info" />
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
      type: Array,
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
}
</style>

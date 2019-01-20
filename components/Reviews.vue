<template lang="html">
  <b-row>
    <b-col
      v-for="review in reviews"
      :key="review.id"
      md="6"
      class="mb-3 mb-md-0"
    >
      <div
        class="p-3 p-lg-4 bg-light rounded"
      >
        <p class="mb-0 lead">
          {{review.text}}
        </p>

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

            <small>
              {{review.author.info}}
            </small>
          </div>

        </div>

      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Reviews",
  computed: {
    reviews() {
      return this.$store.state.reviews.list;
    }
  }
};
</script>

<style lang="css">
</style>

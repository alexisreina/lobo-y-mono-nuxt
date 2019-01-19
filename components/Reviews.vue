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
            blank
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

        <!-- <b-row class="pt-2 pt-lg-4">
          <b-col cols="4">
            <b-img
              blank
              blank-color="#777"
              width="52"
              height="52"
              rounded="circle"
            />
          </b-col>

          <b-col cols="8">
            <p class="mb-1">
              {{review.author.name}}
            </p>
            <small>
              {{review.author.info}}
            </small>
          </b-col>
        </b-row> -->

      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Reviews",
  data() {
    return {
      reviews: [
        {
          id: 0,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          author: {
            name: "Author Name",
            pic: "",
            info: "Related author info"
          }
        },
        {
          id: 1,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          author: {
            name: "Author Name",
            pic: "",
            info: "Related author info"
          }
        }
      ]
    };
  }
};
</script>

<style lang="css">
</style>

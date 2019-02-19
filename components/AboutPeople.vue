<template lang="html">
  <div>
    <h2 class="text-md-center">
      {{team.title}}
    </h2>

    <p class="text-md-center mb-3 mb-md-5">
      {{team.intro}}
    </p>

    <div class="row">
      <div
        v-for="person in team.people"
        :key="person.id"
        class="col-md-6"
      >
        <div class="person">
          <div class="person__image mb-4">
            <img
              :src="person.photo && require(`~/assets/${person.photo.slice(1)}`)"
              :alt="person.name"
              class="img-fluid"
            >
          </div>

          <h3 class="h4 person__name text-md-center">
            {{person.name}}
          </h3>

          <div class="person__bio mx-auto">
            <Markdown class="text-left" :content="person.bio" />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown";

export default {
  name: "AboutPeople",
  components: {
    Markdown
  },
  props: {
    team: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.person {
  text-align: center;

  &__image {
    position: relative;
    display: inline-block;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 3px solid $black;
      border-radius: 50%;
      z-index: 1;
    }

    & /deep/ img {
      transform: translate(5px, 7px);
    }
  }

  &__bio {
    max-width: 25rem;
  }
}
</style>

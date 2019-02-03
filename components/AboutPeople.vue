<template lang="html">
  <div>
    <h2 class="text-md-center">
      {{team.title}}
    </h2>

    <p class="text-md-center mb-3 mb-md-5">
      {{team.intro}}
    </p>

    <b-row>
      <b-col
        v-for="person in team.people"
        :key="person.id"
        md="6"
      >

        <b-img
          :src="person.photo && require(`~/assets${person.photo.slice(1)}`)"
          :alt="person.name"
          :width="!person.photo ? 150 : null"
          :height="!person.photo ? 150 : null"
          :blank-color="!person.photo ? '#e9e9e9' : null"
          :blank="!person.photo"
          class="d-block mb-3 mb-md-4 mx-md-auto"
          rounded="circle"
          fluid
        />

        <h3 class="text-md-center">
          {{person.name}}
        </h3>

        <Markdown :content="person.bio" />
      </b-col>
    </b-row>
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
</style>

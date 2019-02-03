<template lang="html">
  <div>
    <h2
      class="h4"
      :class="{'mb-5': !other.description}"
    >
      {{other.title}}
    </h2>


    <Markdown
      v-if="other.description"
      :content="other.description"
    />

    <b-row>
      <b-col
        v-for="item in other.list"
        :key="item.id"
      >

        <div class="text-center">
          <b-img
            :src="item.image"
            :alt="item.title"
            class="mb-3"
            width="194"
            height="158"
          />

          <h4 class="h6">
            {{item.title}}
          </h4>
        </div>

      </b-col>
    </b-row>

  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
export default {
  name: "ServicesOther",
  components: {
    Markdown
  },
  props: {
    other: {
      type: Object,
      required: true
    }
  }
};
</script>

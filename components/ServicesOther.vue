<template lang="html">
  <div>
    <h2
      class="h4 mb-3"
      :class="{'mb-5': !other.description}"
    >
      {{other.title}}
    </h2>

    <Markdown
      v-if="other.description"
      :content="other.description"
      class="mb-md-5"
    />

    <div class="row">
      <div
        v-for="item in other.list"
        :key="item.id"
        class="col"
      >

        <div class="text-center">
          <img
            :src="item.image"
            :alt="item.title"
            class="mb-3 img-fluid"
          >

          <p>
            {{item.title}}
          </p>
        </div>

      </div>
    </div>

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

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

          <h4 class="h6">
            {{item.title}}
          </h4>
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

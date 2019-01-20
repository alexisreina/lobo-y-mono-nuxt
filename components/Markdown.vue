<template lang="html">
  <vue-showdown :markdown="content" />
</template>

<script>
export default {
  name: "Markdown",
  props: {
    content: {
      type: String,
      required: true
    }
  }
};
</script>

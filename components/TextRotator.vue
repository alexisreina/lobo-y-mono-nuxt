<template lang="html">
  <span class="text-rotator">
    {{currentWord}}
  </span>
</template>

<script>
let theInterval = null;

export default {
  name: "TextRotator",
  props: {
    words: {
      type: Array,
      required: true
    },
    infinite: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      currentWord: this.words[0],
      count: 0
    };
  },
  created() {
    const total = this.words.length - 1;

    theInterval = setInterval(() => {
      this.count += 1;

      if (this.count > total) {
        this.count = 0;

        if (!this.infinite) {
          return clearInterval(theInterval);
        }
      }

      this.currentWord = this.words[this.count];
    }, this.interval);
  },
  destroyed() {
    if (theInterval) {
      clearInterval(theInterval);
    }
  }
};
</script>

<style lang="css" scoped>
  .text-rotator {
    display: inline-block;
  }
</style>

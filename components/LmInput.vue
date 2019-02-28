<template lang="html">
  <div class="form-group">
    <div class="input">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "LmInput"
};
</script>

<style lang="scss" scoped>
$input-border-radius: 54px;

.input {
  position: relative;

  &::before {
    content: "";
    box-sizing: content-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 3px solid $black;
    border-radius: $input-border-radius;
    z-index: 1;
  }

  &::after {
    content: "";
    box-sizing: content-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(5px, 7px);
    border-radius: $input-border-radius;
    border: 1px solid $gray-200;
    background-color: $gray-200;
    z-index: 0;
  }

  & /deep/ input[type="text"],
  & /deep/ input[type="email"],
  & /deep/ input[type="number"],
  & /deep/ input[type="tel"],
  & /deep/ textarea {
    position: relative;
    border-color: transparent !important;
    border-radius: $input-border-radius !important;
    background-color: transparent !important;
    transform: translate(3px, 3px);
    z-index: 2;
  }

  & /deep/ textarea {
    padding-top: 24px;
    padding-bottom: 24px;
  }
}
</style>

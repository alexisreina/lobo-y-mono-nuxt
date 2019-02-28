<template lang="html">
  <b-button :to="to" class="button" variant="transparent">
    <div class="d-flex align-items-center">

      <div v-if="next" class="label mr-3">
        Siguiente
      </div>

      <div class="icon primary">
        <img src="~/assets/svg/lym-arrow.svg" :class="{'prev': prev}" alt="">
      </div>

      <div v-if="prev" class="label ml-3">
        Anterior
      </div>

    </div>
  </b-button>
</template>

<script>
export default {
  name: "LmButton",
  // eslint-disable-next-line
  props: ["next", "prev", "to"]
};
</script>

<style scoped lang="scss">
$border-width: 2px;
$border-radius: 50%;

.btn-transparent {
  background-color: transparent;
  border-color: transparent;
}

.prev {
  transform: rotate(180deg);
}

.icon {
  position: relative;
  z-index: 1;
  border: $border-width solid transparent;
  padding: 0.25rem;

  &:not(:disabled):not(.disabled)::before {
    content: "";
    position: absolute;
    top: $border-width * -1;
    left: $border-width * -1;
    width: calc(100% + #{$border-width * 2});
    height: calc(100% + #{$border-width * 2});
    border: $border-width solid currentColor;
    border-radius: $border-radius;
  }

  &:not(:disabled):not(.disabled)::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + #{$border-width});
    height: calc(100% + #{$border-width});
    z-index: -1;
    background-color: theme-color("primary");
    border-radius: $border-radius;
    transform: translate($border-width - 1px, $border-width - 1px);
    transition: transform 50ms ease-out;
  }

  &:hover:not(:disabled):not(.disabled),
  &:focus:not(:disabled):not(.disabled),
  &:active:not(:disabled):not(.disabled) {
    border-color: transparent;
    background-color: transparent;
    box-shadow: none;
    color: $black;
  }

  &:hover:not(:disabled):not(.disabled)::after,
  &:focus:not(:disabled):not(.disabled)::after,
  &:active:not(:disabled):not(.disabled)::after {
    transform: translate($border-width * 2, $border-width * 2);
  }

  &:disabled {
    background-color: transparent;
  }

  &:disabled::before {
    border-color: $gray-200 !important;
  }

  &:disabled::after {
    background-color: $gray-100 !important;
  }
}
</style>

<template lang="html">
  <b-button
    :class="[
      $style.LmButton,
      $style[variant],
      fav && $style.LmButtonFav
    ]"
    :to="to"
    :size="size"
    :block="block"
  >
    <slot />
  </b-button>
</template>

<script>
export default {
  name: "LmButton",
  // eslint-disable-next-line
  props: ["variant", "size", "block", "to", "fav"]
};
</script>

<style module lang="scss">
$border-width: 2px;
$border-radius: 9999em;

.LmButton {
  position: relative;
  z-index: 1;
  font-weight: 500;
  color: $black;
  border-color: transparent;
  background-color: transparent;

  &::before {
    content: "";
    position: absolute;
    top: $border-width * -1;
    left: $border-width * -1;
    width: calc(100% + #{$border-width * 2});
    height: calc(100% + #{$border-width * 2});
    border: $border-width solid currentColor;
    border-radius: $border-radius;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + #{$border-width});
    height: calc(100% + #{$border-width});
    z-index: -1;
    background-color: transparent;
    border-radius: $border-radius;
    transform: translate($border-width, $border-width);
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
    color: $black;
  }

  &:disabled::before {
    border-color: $gray-200;
  }

  &:disabled::after {
    background-color: $gray-100;
  }

  &.LmButton--light {
    color: $white;

    &:hover,
    &:focus:not(:disabled):not(.disabled),
    &:active:not(:disabled):not(.disabled) {
      color: $white;
    }
  }
}

.LmButtonFav {
  width: 120px;
  height: 120px;
  padding: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.032em;

  &::before,
  &::after {
    width: 120px;
    height: 120px;
    border-width: 3px;
  }
}

.primary:not(:disabled)::after {
  background-color: theme-color("primary");
}

.secondary:not(:disabled)::after {
  background-color: theme-color("secondary");
}

.success:not(:disabled)::after {
  background-color: theme-color("success");
}

.info:not(:disabled)::after {
  background-color: theme-color("info");
}

.warning:not(:disabled)::after {
  background-color: theme-color("warning");
}

.danger:not(:disabled)::after {
  background-color: theme-color("danger");
}

.light:not(:disabled)::after {
  background-color: theme-color("light");
}

.dark:not(:disabled)::after {
  background-color: theme-color("dark");
}
</style>

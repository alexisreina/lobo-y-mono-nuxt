<template lang="html">
  <main class="banner">
    <div class="banner__wrapper">
      <img
        class="banner__image"
        src="~/assets/svg/LYM-logo-svg-16.svg"
        alt="Ilustración de Lobo y Mono"
      >

      <img
        class="banner__logo"
        src="~/assets/svg/LYM-logotipo-17.svg"
        alt="Logo de Lobo y Mono"
      >

      <h1
        class="banner__claim"
      >
        <span>Eventos Salvajemente</span>
        <span>&nbsp;</span>
        <text-rotator style="width:167px;text-align:left;" :words="$cms.settings.rotator.words" />
      </h1>

      <div
        class="banner__icon text-center"
        :class="{ enter: revealMsg }"
      >
        <img src="~/assets/svg/lym-icon-arrow-down.svg" alt="">
      </div>
    </div>
  </main>
</template>

<script>
import TextRotator from "@/components/TextRotator";

export default {
  name: "LmBanner",
  components: {
    TextRotator
  },
  data() {
    return {
      revealMsg: false
    };
  },
  mounted() {
    this.$nextTick(() => setTimeout(() => (this.revealMsg = true), 2000));
  }
};
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  background-image: url(./../assets/svg/LYM-leaf-bottom-left.svg),
    url(./../assets/svg/LYM-leaf-bottom-right.svg),
    url(./../assets/svg/LYM-bg-dot-stars-18.svg);
  background-position: left bottom, right bottom, center;
  background-size: 45%, 45%, 110%;
  background-repeat: no-repeat, no-repeat, repeat;
  background-color: $black;

  &__wrapper {
    width: 100%;
    padding: 3rem 15px;
    max-width: 560px;
    margin-bottom: 0;
  }

  &__logo,
  &__image {
    display: block;
    width: 66.66667vw;
    max-width: 100%;
    margin-bottom: 1.5rem;
    margin-left: auto;
    margin-right: auto;
  }

  &__image {
    width: 66.666667vw;
    margin-bottom: 3rem;
  }

  &__msg,
  &__claim {
    font-family: $font-family-base;
    margin-top: 0;
    color: $red;
  }

  &__claim {
    font-family: $font-family-base;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 1.5rem;
  }

  &__icon {
    font-size: 1.25rem;
    margin-bottom: 3rem;
    opacity: 0;
    transition-duration: 2s;
  }

  &__icon.enter {
    opacity: 1;
    animation-duration: 3s;
    animation-name: jump;
    animation-iteration-count: infinite;
  }

  @keyframes jump {
    0% {
      transform: translateY(10px);
    }
    75% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(10px);
    }
  }

  @media (min-width: 568px) {
    background-image: url(./../assets/svg/LYM-leaf-up-left.svg),
      url(./../assets/svg/LYM-leaf-up-right.svg),
      url(./../assets/svg/LYM-leaf-center-left.svg),
      url(./../assets/svg/LYM-leaf-center-right.svg),
      url(./../assets/svg/LYM-leaf-bottom-left.svg),
      url(./../assets/svg/LYM-leaf-bottom-right.svg),
      url(./../assets/svg/LYM-bg-dot-stars-18.svg);
    background-position: left top, right top, left center, right center,
      left bottom, right bottom, center;
    background-size: 10%, 10%, 12%, 12%, 25%, 25%, 75%;
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat,
      no-repeat, repeat;
    background-color: $black;

    &__logo,
    &__image {
      width: auto;
    }

    &__claim {
      font-size: 22px;
      margin-bottom: 3rem;
    }
  }

  @media (min-width: 768px) {
    background-size: 15%, 20%, 20%, 20%, 35%, 35%, 90%;
  }

  @media (min-width: 1200px) {
    background-size: auto;
  }
}
</style>

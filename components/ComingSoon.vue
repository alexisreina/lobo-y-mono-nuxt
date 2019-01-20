<!-- eslint-disable -->
<template lang="html">
  <main class="cComingSoon">
    <div class="cComingSoon__wrapper">
      <img
        class="cComingSoon__image"
        src="@/assets/svg/LYM-logo-svg-16.svg"
        alt="Ilustración de Lobo y Mono"
      >

      <img
        class="cComingSoon__logo"
        src="@/assets/svg/LYM-logotipo-17.svg"
        alt="Logo de Lobo y Mono"
      >

      <h1
        class="cComingSoon__claim"
      >
        <span>Eventos Salvajemente</span>
        <span>&nbsp;</span>
        <text-rotator style="width:167px;text-align:left;" :words="words" />
      </h1>

      <p
        class="cComingSoon__msg"
        :class="{ enter: revealMsg }"
      >
        muy pronto...
      </p>
    </div>
  </main>
</template>

<script>
import TextRotator from "@/components/TextRotator";
export default {
  name: "ComingSoon",
  components: {
    TextRotator
  },
  data() {
    return {
      words: ["Familiares", "Divertidos", "Inclusivos", "Diversos"],
      revealMsg: false
    };
  },
  mounted() {
    this.$nextTick(() => setTimeout(() => (this.revealMsg = true), 2000));
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Schoolbell|Work+Sans:300,400,600");

.cComingSoon {
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
    // margin-bottom: 3rem;
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

  &__msg {
    display: inline-flex;
    font-size: 1.25rem;
    margin-bottom: 3rem;
    opacity: 0;
    transition-duration: 2s;
  }

  &__msg.enter {
    opacity: 1;
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

<!-- Global styles -->
<style lang="scss">
*,
*::before,
*::after {
  box-sizing: inherit;
}
html {
  font-size: 15px;
  box-sizing: border-box;
}
body {
  font-size: 100%;
  margin: 0;
}
</style>

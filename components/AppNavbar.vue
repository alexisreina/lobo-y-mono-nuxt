<template lang="html">
  <nav class="lm-Navbar">
    <div class="lm-Navbar__header">
      <div class="lm-Navbar__logo">
        <nuxt-link to="/" @click.native="onClick()">
          <img src="~/assets/svg/LYM-logotipo-17.svg" :alt="brand">
        </nuxt-link>
      </div>

      <div class="lm-Navbar__toggle">
        <button class="lm-Navbar__toggle-button" :class="{ 'is-toggled': toggle}" @click="onToggle">
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>

    <transition name="slide-fade">
      <div v-show="toggle" class="lm-Navbar__nav">
        <div class="lm-Navbar__nav-right">
          <nuxt-link
            v-for="item in menuLeft"
            :key="item.id"
            :to="item.url"
            class="lm-Navbar__link"
            @click.native="onClick()"
          >
            {{item.label}}
          </nuxt-link>
        </div>

        <div class="lm-Navbar__logo">
          <nuxt-link to="/" @click.native="onClick()">
            <img src="~/assets/svg/LYM-logotipo-17.svg" :alt="brand">
          </nuxt-link>
        </div>

        <div class="lm-Navbar__nav-left">
          <nuxt-link
            v-for="item in menuRight"
            :key="item.id"
            :to="item.url"
            class="lm-Navbar__link"
            @click.native="onClick()"
          >
            {{item.label}}
          </nuxt-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  props: {
    menu: {
      type: Array,
      required: true
    },
    brand: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      toggle: false
    };
  },
  computed: {
    menuLeft() {
      return this.$props.menu.filter(
        (item, index) => index < Math.ceil(this.$props.menu.length / 2)
      );
    },
    menuRight() {
      return this.$props.menu.filter(
        (item, index) => index >= Math.ceil(this.$props.menu.length / 2)
      );
    }
  },
  methods: {
    onClick() {
      this.toggle = false;
    },
    onToggle() {
      this.toggle = !this.toggle;
    }
  }
};
</script>

<style scoped lang="scss">
/* Enter and leave animations can use different */
/* durations and timing functions.*/
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}

.lm-Navbar {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: $black;

  &__header {
    padding: 5px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    img {
      max-height: 32px;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    > .lm-Navbar__logo {
      display: none;
    }
  }

  &__nav-left,
  &__nav-right {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  &__link {
    position: relative;
    display: block;
    max-width: 280px;
    padding: 5px 10px;
    margin-bottom: 15px;
    margin-left: auto;
    color: $white;
    font-size: 21px;
    font-weight: bold;

    &:hover {
      text-decoration: none;
    }

    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: $white;
      position: absolute;
      top: 100%;
      left: 0;
    }
  }

  @media (min-width: 1071px) {
    display: block;
    padding: 10px 15px;

    &__header {
      display: none;
    }

    &__logo {
      img {
        max-height: 36px;
      }
    }

    &__nav {
      display: flex !important;
      flex-direction: row;
      padding: 0;
      min-height: 100%;
      width: 100%;
      > .lm-Navbar__logo {
        display: block;
      }
    }

    &__nav-left,
    &__nav-right {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &__link {
      padding: 0 3px;
      padding-bottom: 4px;
      margin: 0 15px;
      font-size: 15px;
      font-weight: normal;

      // &::after {
      //   height: 2px;
      // }
    }

    &__nav-left {
      margin-right: 0;
      margin-left: auto;

      & /deep/ .lm-Navbar__link {
        padding-right: 1px;
        text-align: right;
        margin-right: 0;
        margin-left: 30px;
      }
    }

    &__nav-right {
      margin-right: auto;
      margin-left: 0;

      & /deep/ .lm-Navbar__link {
        padding-left: 1px;
        text-align: left;
        margin-right: 30px;
        margin-left: 0;
      }
    }
  }
}

.lm-Navbar__toggle-button {
  padding: 5px;
  background-color: transparent;
  border: 0;
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  & /deep/ span {
    background-color: #fff;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 4px;
    transition-duration: 500ms;
  }

  & /deep/ span:nth-child(1) {
    top: 0px;
    left: 0px;
  }

  & /deep/ span:nth-child(2) {
    top: 13px;
    left: 0px;
  }

  & /deep/ span:nth-child(3) {
    bottom: 0px;
    left: 0px;
  }

  &:not(.is-toggled):hover {
    & /deep/ span:nth-child(1) {
      transform: rotate(-3deg) scaleY(1.1);
    }

    & /deep/ span:nth-child(2) {
      transform: rotate(3deg) scaleY(1.1);
    }

    & /deep/ span:nth-child(3) {
      transform: rotate(-4deg) scaleY(1.1);
    }
  }

  &.is-toggled {
    & /deep/ span:nth-child(1) {
      transform: rotate(45deg);
      top: 13px;
    }

    & /deep/ span:nth-child(2) {
      transform: scale(0.1);
    }

    & /deep/ span:nth-child(3) {
      transform: rotate(-45deg);
      top: 13px;
    }
  }
}
</style>

<template lang="html">
  <!-- <b-navbar
    toggleable="lg"
    type="dark"
    variant="dark"
  >
    <b-navbar-toggle target="nav_collapse" />
    <b-navbar-brand to="/">
      {{brand}}
    </b-navbar-brand>
    <b-collapse id="nav_collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          v-for="item in menu"
          :key="item.id"
          :to="item.url"
        >
          {{item.label}}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar> -->

  <nav class="lm-Navbar">
    <div class="lm-Navbar__header">
      <div class="lm-Navbar__logo">
        <!-- logo goes here -->
        <nuxt-link to="/">
          <!-- {{brand}} -->
          <img src="~/assets/svg/LYM-logotipo-17.svg" :alt="brand">
        </nuxt-link>
      </div>

      <div class="lm-Navbar__toggle">
        <button class="menuFive" :class="{ 'clickMenuFive': toggle}" @click="toggle = !toggle">
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>

    <transition name="slide-fade">
      <div v-show="toggle" class="lm-Navbar__link-container">
        <div class="lm-Navbar__links-right">
          <nuxt-link
            v-for="item in menuLeft"
            :key="item.id"
            :to="item.url"
          >
            {{item.label}}
          </nuxt-link>
        </div>

        <div class="lm-Navbar__logo">
          <img src="~/assets/svg/LYM-logotipo-17.svg" :alt="brand">
        </div>

        <div class="lm-Navbar__links-left">
          <nuxt-link
            v-for="item in menuRight"
            :key="item.id"
            :to="item.url"
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
  }
};
</script>

<style scoped lang="scss">
/* Enter and leave animations can use different */
/* durations and timing functions.              */
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
  background-color: rgba($black, 0.96);

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

  &__link-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    > .lm-Navbar__logo {
      display: none;
    }

    & /deep/ a {
      position: relative;
      display: block;
      max-width: 280px;
      padding: 5px 10px;
      margin-bottom: 15px;
      margin-left: auto;
      color: #fff;
      font-size: 21px;
      font-weight: bold;

      &:hover {
        text-decoration: none;
      }

      &::after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #fff;
        position: absolute;
        top: 100%;
        left: 0;
      }
    }
  }

  &__links-left,
  &__links-right {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media (min-width: 1071px) {
    display: block;
    padding: 10px 15px;

    &__header {
      display: none;
    }

    &__logo {
      img {
        max-height: 42px;
      }
    }

    &__link-container {
      display: flex !important;
      flex-direction: row;
      padding: 0;
      min-height: 100%;
      width: 100%;
      > .lm-Navbar__logo {
        display: block;
      }

      & /deep/ a {
        // min-width: 120px;
        padding: 0 3px;
        padding-bottom: 4px;
        margin: 0 15px;
        font-size: 15px;
        font-weight: bold;
      }
    }

    &__links-left,
    &__links-right {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &__links-left {
      margin-right: 0;
      margin-left: auto;

      & /deep/ a {
        padding-right: 1px;
        text-align: right;
        margin-right: 0;
        margin-left: 30px;
      }
    }

    &__links-right {
      margin-right: auto;
      margin-left: 0;

      & /deep/ a {
        padding-left: 1px;
        text-align: left;
        margin-right: 30px;
        margin-left: 0;
      }
    }
  }
}

.lm-Navbar__toggle button {
  padding: 5px;
  background-color: transparent;
  border: 0;

  &:focus {
    outline: none;
    box-shadow: none;
  }
}
/* menuFive */
.menuFive {
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;
}
.menuFive span {
  background-color: #fff;
  position: absolute;
  border-radius: 2px;
  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  width: 100%;
  height: 4px;
  transition-duration: 500ms;
}
.menuFive span:nth-child(1) {
  top: 0px;
  left: 0px;
}
.menuFive span:nth-child(2) {
  top: 13px;
  left: 0px;
}
.menuFive span:nth-child(3) {
  bottom: 0px;
  left: 0px;
}
.menuFive:not(.clickMenuFive):hover span:nth-child(1) {
  transform: rotate(-3deg) scaleY(1.1);
}
.menuFive:not(.clickMenuFive):hover span:nth-child(2) {
  transform: rotate(3deg) scaleY(1.1);
}
.menuFive:not(.clickMenuFive):hover span:nth-child(3) {
  transform: rotate(-4deg) scaleY(1.1);
}
.clickMenuFive span:nth-child(1) {
  transform: rotate(45deg);
  top: 13px;
}
.clickMenuFive span:nth-child(2) {
  transform: scale(0.1);
}
.clickMenuFive span:nth-child(3) {
  transform: rotate(-45deg);
  top: 13px;
}
</style>

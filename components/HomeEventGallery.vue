<template lang="html">
  <b-row align-v="center">
    <b-col md="6">
      <div>
        <h2>
          {{title}}
        </h2>

        <p>
          {{text}}
        </p>

        <lm-button
          v-for="(key, index) in actions.items"
          :key="key"
          :variant="actions[key].variant"
          :class="{'mr-2': index !== actions.length - 1}"
          :to="actions[key].to"
        >
          {{actions[key].label}}
        </lm-button>
      </div>
    </b-col>
    <b-col md="6">
      <b-img
        :src="img.src"
        :srcset="img.srcset"
        :alt="img.alt"
        fluid
      />
    </b-col>
  </b-row>
</template>

<script>
import LmButton from "@/components/LmButton.vue";

export default {
  name: "HomeEventGallery",
  components: {
    LmButton
  },
  data() {
    return {
      title: "Galería de Eventos",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

      actions: {
        items: ["all"],
        all: {
          id: "all",
          label: "Ver todos los eventos",
          variant: "primary",
          to: "/eventos"
        }
      },
      img: {
        src: "//picsum.photos/540/375",
        srcset: "//picsum.photos/1080/750 2x",
        alt: ""
      }
    };
  }
};
</script>

<style lang="css">
</style>

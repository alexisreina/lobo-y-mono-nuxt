<template lang="html">
  <div class="contact">
    <b-container class="py-3 pt-md-4">
      <b-row>
        <b-col lg="10" offset-lg="1">
          <h1 class="text-white">
            {{$cms.pages.contact.header}}
          </h1>

          <Markdown class="text-white" :content="$cms.pages.contact.intro" />
        </b-col>
      </b-row>

      <ContactForm />

    </b-container>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "ContactPage",
  layout: "page",
  components: {
    Markdown,
    ContactForm
  }
};
</script>

<style lang="scss" scoped>
.contact {
  background-color: $black;
  background-image: url("~assets/svg/lym-telefono.svg");
  background-repeat: no-repeat;
  background-position: 250% bottom;
  background-size: 90% auto;
}
</style>

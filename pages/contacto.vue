<template lang="html">
  <div class="contact">
    <div class="container py-3 pt-md-4">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <h1 class="h2 text-white mb-3">
            {{$cms.pages.contact.header}}
          </h1>

          <Markdown class="text-white mb-3 mb-md-5" :content="$cms.pages.contact.intro" />

          <div class="py-3 py-md-5">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
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

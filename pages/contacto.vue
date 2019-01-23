<template lang="html">
  <div class="contacto">
    <b-container class="py-3 pt-md-4">
      <b-row>
        <b-col lg="10" offset-lg="1">
          <h1>
            {{page.header}}
          </h1>

          <Markdown :content="page.intro" />
        </b-col>
      </b-row>
    </b-container>

    <b-container class="pb-3 pb-lg-5">
      <ContactForm />
    </b-container>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import ContactForm from "@/components/ContactForm.vue";

// content
import page from "@/content/contact.json";

export default {
  name: "ContactPage",
  layout: "page",
  components: {
    Markdown,
    ContactForm
  },
  data() {
    return {
      page
    };
  }
};
</script>

<style lang="css">
</style>

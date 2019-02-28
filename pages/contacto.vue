<template lang="html">
  <div class="page-contact">
    <main class="container py-3 pt-md-5">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">

          <div class="text-md-center">
            <h1 class="h2 text-white mb-3">
              {{$cms.pages.contact.header}}
            </h1>

            <Markdown class="text-white mb-3 mb-md-5" :content="$cms.pages.contact.intro" />
          </div>

          <div class="py-3 pt-md-5">
            <FormContact />
          </div>

        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown.vue";
import FormContact from "@/components/FormContact.vue";

export default {
  name: "ContactPage",
  layout: "page",
  components: {
    Markdown,
    FormContact
  }
};
</script>

<style lang="scss" scoped>
.page-contact {
  background-color: $black;
  background-image: url("~assets/svg/lym-telefono.svg");
  background-repeat: no-repeat;
  background-position: 250% bottom;
  background-size: 90% auto;
}
</style>

<template lang="html">
  <div class="page-thanks py-5">
    <main role="main">
      <section class="container py-5">
        <div class="box py-5">
          <img
            src="~/assets/svg/lym-thanks-lobo.svg"
            alt="Gracias"
            class="img-fluid d-block mx-auto mb-5"
          >

          <h1 class="message mb-3">
            ¡Gracias!<br>Pronto nos pondremos en contacto contigo
          </h1>

          <div class="mb-3">
            <nuxt-link :to="{ name: 'index' }" class="link">
              Vuelve al inicio!
            </nuxt-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "ThankYouPage",
  layout: "default"
};
</script>

<style lang="scss" scoped>
.page-thanks {
  min-height: 100vh;
  background-color: #fff;
}
.box {
  background-color: $gray-100;
  border-radius: 64px;
  text-align: center;
}
.link {
  font-weight: bold;
  text-decoration: underline;
}
</style>

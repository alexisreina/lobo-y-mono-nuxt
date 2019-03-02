<template lang="html">
  <div class="page-thanks py-3">
    <main role="main">
      <section class="container">
        <div class="box mx-auto">
          <img
            src="~/assets/svg/lym-thanks-lobo.svg"
            alt="Gracias"
            class="d-block mx-auto mb-5"
            style="max-width:330px;width:100%"
          >

          <h1 class="h3 mb-3">
            ¡Gracias!<br>Pronto nos pondremos en contacto contigo
          </h1>

          <nuxt-link :to="{ name: 'index' }" class="link d-inline-block mb-5">
            Vuelve al inicio!
          </nuxt-link>
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  border-radius: 64px;
  max-width: 450px;
  text-align: center;
}
.link {
  display: inline-block;
  font-weight: bold;
  text-decoration: underline;
}
</style>

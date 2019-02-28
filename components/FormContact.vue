<template lang="html">
  <form id="form_contact" netlify name="Contacto">
    <div class="row">
      <div class="col-lg-4">
        <LmInput>
          <label for="input_email" class="sr-only">
            Email
          </label>

          <input
            id="input_email"
            class="form-control"
            type="email"
            name="Email"
            placeholder="Email*"
            autocomplete="email"
            required
          >
        </LmInput>
      </div>

      <div class="col-lg-4">
        <LmInput>
          <label for="input_phone" class="sr-only">
            Teléfono
          </label>

          <input
            id="input_phone"
            class="form-control"
            type="tel"
            name="Teléfono"
            placeholder="teléfono*"
            autocomplete="tel"
            required
          >
        </LmInput>
      </div>

      <div class="col-lg-4">
        <LmInput>
          <label for="input_company" class="sr-only">
            Empresa
          </label>

          <input
            id="input_company"
            class="form-control"
            type="text"
            name="Empresa"
            placeholder="empresa"
            autocomplete="organization"
            required
          >
        </LmInput>
      </div>

      <div class="col-12">
        <LmInput>
          <label for="input_message" class="sr-only">
            Teléfono
          </label>

          <textarea
            id="input_message"
            class="form-control"
            name="Mensaje"
            placeholder="Escribe aquí tu mensaje..."
            rows="8"
          />
        </LmInput>
      </div>

      <div class="col-12 text-right">
        <div class="form-group">
          <LmButton type="submit" variant="primary">
            Enviar
          </LmButton>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import LmButton from "@/components/LmButton.vue";
import LmInput from "@/components/LmInput.vue";

export default {
  name: "ContactForm",
  components: {
    LmButton,
    LmInput
  }
};
</script>

<style>
</style>

<template lang="html">
  <form id="form_create" name="Crea tu evento" method="post" action="thank-you" data-netlify="true">

    <div class="d-none">
      <input type="hidden" name="Título" :value="event.title">
      <input type="hidden" name="Introducción" :value="getItemValues(event.intro)">
      <input type="hidden" name="Nudo" :value="getItemValues(event.nudo)">
      <input v-if="event.desenlace" type="text" name="Desenlace" :value="getItemValues(event.desenlace)">
      <input type="hidden" name="Presupuesto" :value="budget">
    </div>

    <div class="row align-items-lg-center">
      <div class="col-lg-6">
        <LmInput class="mb-lg-4">
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

        <LmInput class="mb-lg-4">
          <label for="input_phone" class="sr-only">
            Teléfono
          </label>

          <input
            id="input_phone"
            class="form-control"
            type="tel"
            name="Teléfono"
            placeholder="Teléfono*"
            autocomplete="tel"
            required
          >
        </LmInput>

        <LmInput class="mb-lg-3">
          <label for="input_company" class="sr-only">
            Empresa
          </label>

          <input
            id="input_company"
            class="form-control"
            type="text"
            name="Empresa"
            placeholder="Empresa*"
            autocomplete="organization"
            required
          >
        </LmInput>
      </div>

      <div class="col-lg-6">
        <LmInput>
          <label for="input_message" class="sr-only">
            Teléfono
          </label>

          <textarea
            id="input_message"
            class="form-control"
            name="Mensaje"
            placeholder="Escribe aquí tu mensaje..."
            rows="6"
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
  },
  props: {
    event: {
      type: Object,
      required: true
    },
    budget: {
      type: String,
      required: true
    }
  },
  methods: {
    getItemValues(list) {
      return list
        .reduce((result, item) => {
          result.push(`${item.title} (${item.price}€)`);
          return result;
        }, [])
        .join();
    }
  }
};
</script>

<style>
</style>

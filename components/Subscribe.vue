<template lang="html">
  <b-form>
    <b-row align-v="center">
      <b-col>
        <h3>{{title}}</h3>
      </b-col>
      <b-col>
        <b-form-input
          v-model="form.email.model"
          :id="form.email.id"
          :type="form.email.type"
          :placeholder="form.email.placeholder"
          :required="form.email.required"
        />
      </b-col>
      <b-col>
        <lm-button
          :type="btn.type"
          :variant="btn.variant"
        >
          {{btn.label}}
        </lm-button>
      </b-col>  
    </b-row>
  </b-form>
</template>

<script>
import lmButton from "@/components/lmButton.vue";

export default {
  name: "subscribe",
  components: {
    lmButton
  },
  data() {
    return {
      title: "Apúntate a la newsletter y no te pierdas nada",
      form: {
        email: {
          type: "email",
          id: "subs_email",
          required: true,
          placeholder: "Escribe tu email aquí",
          model: ""
        }
      },
      btn: {
        type: "submit",
        label: "Enviar",
        variant: "primary"
      }
    };
  }
};
</script>

<style lang="css">
</style>

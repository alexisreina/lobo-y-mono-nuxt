<template lang="html">
  <b-form @submit="onSubmit" @reset="onReset">
    <b-row>
      <b-col lg="4">
        <b-form-group
          id="input_group_email"
          __label="Email address:"
          label-for="input_email"
          __description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input_email"
            v-model="form.email.model"
            type="email"
            placeholder="email*"
            required
          />
        </b-form-group>
      </b-col>

      <b-col lg="4">
        <b-form-group
          id="input_group_phone"
          __label="Your Phone:"
          label-for="input_phone"
        >
          <b-form-input
            id="input_phone"
            v-model="form.phone.model"
            type="text"
            placeholder="teléfono*"
            required
          />
        </b-form-group>
      </b-col>

      <b-col lg="4">
        <b-form-group
          id="input_group_company"
          __label="Your Company:"
          label-for="input_company"
        >
          <b-form-input
            id="input_company"
            v-model="form.company.model"
            type="text"
            placeholder="empresa"
            required
          />
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-form-group
          id="input_group_msg"
          __label="Your Message:"
          label-for="input_msg"
        >
          <b-form-textarea
            id="textarea1"
            v-model="form.message.model"
            placeholder="mensaje"
            rows="6"
          />
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="text-right">
        <b-button type="submit" variant="outline-secondary">
          {{form.submit.label}}
        </b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
const form = {
  email: {
    id: "input_email",
    groupId: "input_group_email",
    type: "email",
    description: "We'll never share your email with anyone else.",
    label: "Email address:",
    required: true,
    placeholder: "",
    model: ""
  },
  phone: {
    id: "input_phone",
    groupId: "input_group_phone",
    type: "tel",
    label: "Your Phone:",
    required: true,
    placeholder: "",
    model: ""
  },
  company: {
    id: "input_com",
    groupId: "input_group_company",
    type: "text",
    label: "Your Company:",
    required: true,
    placeholder: "",
    model: ""
  },
  message: {
    id: "input_msg",
    groupId: "input_group_msg",
    type: "text",
    label: null,
    required: true,
    placeholder: "",
    model: ""
  },
  submit: {
    label: "Enviar"
  }
};

export default {
  name: "ContactForm",
  data() {
    return {
      form
    };
  },
  methods: {
    onSubmit() {},
    onReset() {}
  }
};
</script>

<template>
  <div>
    <v-form ref="form" class="form">
      <v-text-field
        v-model.trim="login"
        :rules="[rules.required, rules.email]"
        label="email"
      />
      <div class="input-pass">
        <v-text-field
          v-model.trim="password"
          :type="showPass ? 'text' : 'password'"
          :rules="[rules.required]"
          label="password"
        />
        <v-checkbox label="Show" class="show-pass pa-0 ma-0" v-model="showPass"
          >show</v-checkbox
        >
      </div>
      <div class="d-flex justify-center">
        <v-btn
          class="mt-8 yellow-button"
          @click="submit"
          color="buttons"
          rounded
          large
          >sign in</v-btn
        >
      </div>
    </v-form>

    <Error
      :error.sync="error"
      :errorType="errorType"
      :errorMessage="errorMessage"
    />
  </div>
</template>

<script>
import sha256 from "crypto-js/sha256";
import Base64 from "crypto-js/enc-base64";
export default {
  name: "Login",
  components: {
    Error: () => import("@/components/Error.vue"),
  },
  data: () => ({
    error: false,
    errorType: "sign in",
    errorMessage: "Process failed...",
    login: "",
    password: "",
    showPass: false,
    rules: {
      required: (v) => !!v || "input is required",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailError = !pattern.test(value);
        return (
          !value ||
          !emailError ||
          "Please enter your email address in format: yourname@example.com"
        );
      },
    },
  }),
  methods: {
    async sendData(data) {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/admin`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        res.headers.get("Set-Cookie");
        const response = await res.json();
        window.location.href = response.link;
      } else {
        this.error = true;
      }
    },
    submit() {
      const data = {
        email: this.login,
        password: Base64.stringify(sha256(this.password)),
      };
      if (this.$refs.form.validate()) {
        this.sendData(data);
      }
    },
  },
};
</script>
<style>
.form {
  position: fixed;
  width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.input-pass {
  position: relative;
}
.show-pass {
  position: absolute;
  bottom: 0;
  right: 0;
}
.v-label,
.v-icon.v-icon {
  font-size: 14px !important;
}
</style>

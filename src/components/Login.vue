<template>
  <div>
    <v-form ref="form" class="form">
      <v-text-field v-model="login" :rules="[rules.required]" label="login" />
      <div class="input-pass">
        <v-text-field
          v-model="password"
          :type="showPass ? 'text' : 'password'"
          :rules="[rules.required]"
          label="password"
        />
        <v-checkbox label="Show" class="show-pass pa-0 ma-0" v-model="showPass">show</v-checkbox>
      </div>
      <div class="d-flex justify-center">
        <v-btn class="mt-8 yellow-button" @click="submit" color="buttons" rounded large
          >sign in</v-btn
        >
      </div>
    </v-form>

    <Error :error.sync="error" :errorType="errorType" :errorMessage="errorMessage" />
  </div>
</template>

<script>
  export default {
    name: 'Login',
    components: {
      Error: () => import('@/components/Error.vue'),
    },
    data: () => ({
      error: false,
      errorType: 'sign in',
      errorMessage: 'Process failed...',
      login: '',
      password: '',
      showPass: false,
      rules: {
        required: (v) => !!v || 'input is required',
      },
    }),
    methods: {
      async sendData(data) {
        const res = await fetch(`${process.env.VUE_APP_API_URL}/admin`, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(data),
        });
        if (res.status === 200) {
          res.headers.get('Set-Cookie');
          const response = await res.json();
          window.location.href = response.link;
        } else {
          this.error = true;
        }
      },
      submit() {
        const data = {
          email: this.login,
          password: this.password,
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

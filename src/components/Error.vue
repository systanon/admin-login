<template>
  <v-dialog v-model="dialog" max-width="480px" class="pa-4">
    <v-card flat>
      <v-toolbar dark dense color="error">
        <v-icon class="mr-4"> mdi-alert </v-icon>
        <v-toolbar-title> Error </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false">
          <v-icon large> mdi-close </v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="text-center mt-10">
        <h4>{{ errorType || 'Unknown error type' }}</h4>
      </v-card-text>
      <v-card-text class="text-center">
        <h3>{{ errorMessage || 'Unknown Error' }}</h3>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'ErrorMessage',
    props: {
      error: {
        type: Boolean,
        default: false,
      },
      errorMessage: {
        type: String,
        default: '',
      },
      errorType: {
        type: String,
        default: '',
      },
    },
    computed: {
      dialog: {
        get() {
          return this.error;
        },
        set(val) {
          this.$emit('update:error', val);
        },
      },
    },
    methods: {
    },
  };
</script>

<template>
  <v-app>
    <v-main>
      <Login/>
    </v-main>
  </v-app>
</template>

<script>
import Login from '@/components/Login';

export default {
  name: 'App',

  components: {
    Login,
  },

  data: () => ({
    //
  }),
  created(){
    localStorage.setItem('redirectPath', window.location.pathname)
  }
};
</script>
<style>
html,
body,
.v-application {
  font-family: 'Arial' !important;
}
.yellow-button {
  color: #000 !important;
  font-family: 'Arial Bold'; 
  /* font-weight: bold; */
  font-size: 16px !important;
}
.mdi-close::before, .mdi-alert::before {
  transform: scale(2) !important;
}
</style>



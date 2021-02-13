import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'

Vue.config.productionTip = false

import '@/css/fonts.css';

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

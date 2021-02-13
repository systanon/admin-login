import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#FFC44A',
        orange: '#FFC44A',
        secondary: '#dde',
        dgrey: '#333333',
        lgrey: '#F4F4F4',
        // orange
        // light gray
        darkGrey: '#333333',
        buttons: '#FFC44A',
        homefone: '#ffffff',
        warning: '#FAFF00',
        // shop
        mgrey: '#262624',
        whitefone: '#ffffff',
        shopfont: '#808080',
        secondaryGray: '#262624',
        // courses
        coursesGray: '#4D4D4D',
        notPaidAndPublished: '#369ab3',
        error: '#f5420d',
        onlineCardFone: '#414242',
        disabledPathBreadcrumbs: '#262624',
        text: '#000',
        btnEdit: '#278ed3'
      },
    },
  },
});

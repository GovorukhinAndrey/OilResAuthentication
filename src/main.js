import Vue from 'vue';
import VueMask from 'v-mask';
import VueSwal from 'vue-swal';
import Vuelidate from 'vuelidate';
import VueTippy, { TippyComponent } from 'vue-tippy';
import App from './App.vue';
import store from './store';

import { firebaseAuth } from '@/firebase';

Vue.use(VueSwal);
Vue.use(VueMask);
Vue.use(VueTippy);
Vue.use(Vuelidate);

Vue.component('tippy', TippyComponent);
Vue.config.productionTip = false;

let app;

firebaseAuth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      store,
      render: h => h(App),
    }).$mount('#app');
  }
});

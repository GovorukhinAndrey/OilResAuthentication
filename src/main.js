import Vue from 'vue';
import VueMask from 'v-mask';
import VueSwal from 'vue-swal';
import VueTippy, { TippyComponent } from 'vue-tippy';
import App from './App.vue';
import store from './store';

Vue.use(VueSwal);
Vue.use(VueMask);
Vue.use(VueTippy);

Vue.component('tippy', TippyComponent);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

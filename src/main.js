import Vue from 'vue';
import App from './App.vue';
import store from './store';

import Loader from '@/components/app/Loader';
Vue.component('Loader', Loader);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

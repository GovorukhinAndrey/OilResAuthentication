import Vue from 'vue';
import App from './App.vue';
import store from './store';

import Loader from '@/components/app/Loader';
import Icon from '@/components/app/Icon';

Vue.component('Loader', Loader);
Vue.component('Icon', Icon);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

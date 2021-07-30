import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [
  'a-scene',
  'a-entity',
  'a-camera',
  'a-box',
  'a-sphere',
  'a-cylinder',
  'a-plane',
  'a-sky',
  'a-text',
];

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

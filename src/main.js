import Vue from 'vue/dist/vue.common.js';
import App from './App.vue';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

import first from './components/helloworld.vue';
import second from './components/second.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: first,
    },
    {
      path: '/second',
      component: second,
    },
  ]
});

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');


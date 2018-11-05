import Vue from 'vue';
import Router from 'vue-router';
import Card from '@/pages/Card';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Card',
      component: Card,
    },
  ],
});

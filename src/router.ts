import Vue from 'vue';
import {IonicVueRouter} from '@ionic/vue';
import Home from './components/Home.vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
});

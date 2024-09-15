import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Routes from './routes';


Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';

export const bus = new Vue();

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

// Custom directives
Vue.directive('theme', {
  bind(el, binding) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1200px';
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '800px';
    }

    if (binding.arg === 'dark') {
      el.style.background = '#333';
    }
  }
});


// Custom filters
Vue.filter('snippet', value => 
  value.length > 100 ?
  value.slice(0, 97) + '...' :
  value
);

new Vue({
  el: '#app',
  render: h => h(App),
  router
});

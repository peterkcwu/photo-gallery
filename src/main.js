import Vue from 'vue';
import ElementUI from 'element-ui';
import VueNavigationBar from 'vue-navigation-bar';
import 'element-ui/lib/theme-chalk/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faUser, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';
import App from './App.vue';


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component('vue-navigation-bar', VueNavigationBar);
library.add(faUser, faCamera, faCoffee);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;


new Vue({
  // el: '#app',
  router,
  render: h => h(App),
}).$mount('#app');

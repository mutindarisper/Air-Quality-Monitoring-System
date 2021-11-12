import Vue from 'vue'
import App from './App.vue'
import 'leaflet/dist/leaflet.css';
import $ from 'jquery';
import "bootstrap-select";
//import { createApp } from 'vue'
import store from './store'


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App, $),
}).$mount('#app')






//createApp(App).use(store).mount('#app')



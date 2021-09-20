// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import '@fortawesome/fontawesome-free/css/all.css';
import App from "./App";
import router from "./router";
import axios from "axios";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import i18n from './i18n';
import './assets/fonts/fonts.css';
import '../node_modules/nprogress/nprogress.css';
import VueGoogleAutocomplete from 'vue-google-autocomplete';
import VueSocialauth from 'vue-social-auth';
import 'vue-search-select/dist/VueSearchSelect.css';
import vSelect from 'vue-select';
import { sitemapMiddleware }     from "./sitemapMiddleware";
import GoogleMapsLoader from 'google-maps';
import VueSession from 'vue-session';
import fullCalendar from 'vue-fullcalendar';
Vue.component('full-calendar', fullCalendar);
import VueMeta from 'vue-meta';
Vue.use(VueMeta)
Vue.use(VueSession);

Vue.component('v-select', vSelect)
Vue.use(VueGoogleAutocomplete);
Vue.use(BootstrapVue);

library.add(fas);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {

  let language = to.params.lang;
  if(!language) {
    language = 'en'
  } 

    //setting the current language for translation
  i18n.locale = language
  next()
})

axios.defaults.baseURL = "http://localhost:8080/api/";
//axios.defaults.baseURL = "http://localhost:8080/api/";
//axios.defaults.baseURL ='https://providerapi.kovered.io/api';
//axios.defaults.baseURL = "https://api.kovered.io/api/";
//axios.defaults.baseURL="http://koveredapi-admin.us-east-2.elasticbeanstalk.com/api/"
//axios.defaults.baseURL = 'http://koveredapi-web-1.us-east-2.elasticbeanstalk.com/api/'
// axios.defaults.baseURL = 'http://koveredapi-web-1.us-east-2.elasticbeanstalk.com/api/'
axios.defaults.timeout = 6000;
axios.defaults.headers.common["Accept"] = "application/json";
if (store.getters.isAuthenticated) {
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + store.state.token;
}

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  i18n,
  template: "<App/>"
});

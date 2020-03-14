import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import $ from "jquery";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/slick-carousel/slick/slick.js";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  $,
  render: h => h(App)
}).$mount("#app");

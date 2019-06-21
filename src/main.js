import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index";
import store from "@/store/index";
import $ from "jquery";
import animated from "animate.css";
import "@/assets/css/common.css";
import "./registerServiceWorker";
import "./plugins/iview.js";
import { Message } from "iview";
Vue.prototype.$Message = Message;
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import Router from "vue-router";
import iView from 'iview';
import routes from './routes.js'
// import store from '../store.js'
Vue.use(Router);
const router = new Router({
    base: process.env.BASE_URL,
    linkActiveClass: "active",
    routes: routes,
})
const turnTo = (to, next) => {
    if (window.location.host == '47.92.91.16') {
        next({ path: "/onlineMonitor" })
    } else {
        if (store.state.userInfo.userName!=="guest") next({ path: "/home/all" })
        else next({ path: "/analysisCompete/overview" })
    }
}
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});
router.afterEach(route => {
    iView.LoadingBar.finish();
});
export default router
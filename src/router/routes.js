const redirect = '/about'
const routes = [{
        path: '/',
        redirect: redirect,
        name: 'home',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import( /* webpackChunkName: "about" */ 'views/Home.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "about" */ 'views/Login.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import( /* webpackChunkName: "about" */ 'views/About.vue')
    },
    {
        path: '/meeting',
        name: 'meeting',
        component: () => import( /* webpackChunkName: "about" */ 'views/meeting.vue')
    }
]
export default routes
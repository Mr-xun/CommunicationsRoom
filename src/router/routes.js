const redirect = '/login'
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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ 'views/About.vue')
    }
]
export default routes
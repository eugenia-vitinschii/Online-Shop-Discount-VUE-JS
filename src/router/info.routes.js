//info routes

const routes = [
   {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
   {
      name: "InfoView",
      path: '/info',
      component: () => import('../views/InfoView.vue')
   },
   {
      name: "PromoView",
      path: '/promo',
      component: () => import('../views/PromoView.vue'),
   },
]

export default routes;
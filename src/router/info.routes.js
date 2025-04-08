//info routes

const routes = [
   {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: "Discount" },
    },
   {
      name: "InfoView",
      path: '/info',
      component: () => import('../views/InfoView.vue'),
      meta: { title: "Information" }
   },
   {
      name: "PromoView",
      path: '/promo',
      component: () => import('../views/PromoView.vue'),
      meta: { title: "Promo" }
   },
]

export default routes;
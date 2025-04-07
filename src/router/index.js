//vue router
import { createRouter, createWebHistory } from 'vue-router';

//import routes
import adminRoutes from "./admin.routes"
import productRoutes from "./product.routes"


//routes
   const router = createRouter({
   history: createWebHistory(),
   routes: [
   {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    }, 
   {
      name: "FavoriteView",
      path: '/favorite',
      component: () => import('../views/FavoriteView.vue')
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
   {
      name: "BrandView",
      path: "/brand/:brand",
      component: () => import("../views/BrandView.vue")
   },
   {
      name: "ShoppingCartView",
      path: '/shopping-cart',
      component: () => import('../views/ShoppingCartView.vue')
   },
   ...adminRoutes,
   ...productRoutes,
],
});


export default router
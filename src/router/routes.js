import { createRouter, createWebHistory } from 'vue-router';

const routes = [
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
      name: "ItemsView",
      path: '/items',
      component: () => import('../views/ItemsView.vue')
   },
   {
      name: "ProductView",
      path: '/product/:id',
      component: () => import('../views/ProductView.vue'),
      props: true 
   },
   {
      name: "ShoppingCardView",
      path: '/shopping-card',
      component: () => import('../views/ShoppingCardView.vue')
   },
   {
      name: "AdminLoginView",
      path: '/admin-login',
      component: () => import('../views/Admin/AdminLoginView.vue'),
      props: true 
   },

   {
      name: "AdminView",
      path: '/admin-panel',
      component: () => import('../views/Admin/AdminView.vue'),
      props: true 
   },
   {
      name: "UpdateView",
      path: '/update/:id',
      component: () => import('../views/Admin/UpdateView.vue'),
      props: true 
   },
   {
      name: "AddProductView",
      path: '/add-product',
      component: () => import('../views/Admin/AddProductView.vue'),
      props: true 
   },
   {
      name: "EditProduct",
      path: '/edit-product',
      component: () => import('../views/Admin/EditView.vue'),
      props: true 
   },
]




const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router
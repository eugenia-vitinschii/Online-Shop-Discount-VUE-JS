//user routes
const routes = [
   {
      name: "FavoriteView",
      path: '/favorite',
      component: () => import('../views/FavoriteView.vue')
   },
   {
      name: "ShoppingCartView",
      path: '/shopping-cart',
      component: () => import('../views/ShoppingCartView.vue')
   },
 ];
 
 export default routes;
 

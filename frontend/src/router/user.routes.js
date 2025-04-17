//user routes
const routes = [
   {
      name: "FavoriteView",
      path: '/favorite',
      component: () => import('../views/FavoriteView.vue'),
      meta: { title: "Favorite" }
   },
   {
      name: "ShoppingCartView",
      path: '/shopping-cart',
      component: () => import('../views/ShoppingCartView.vue'),
      meta: { title: "Cart" }
   },
 ];
 
 export default routes;
 

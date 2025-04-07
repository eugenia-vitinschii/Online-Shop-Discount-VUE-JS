//product routes
const routes = [
   {
     path: "/products",
     children: [
       {
         path: "",
         component: () => import('../views/ItemsView.vue')
       },
       {
         path: "product/:id",
         component: () => import('../views/ProductView.vue'),
       }
     ],
   },
   {},
 ];
 
 export default routes;
 
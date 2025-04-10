//product routes
const routes = [
   {
     path: "/products",
     children: [
       {
         path: "",
         component: () => import('../views/ItemsView.vue'),
         meta: { title: "Products" }
       },
       {
         path: ":id",
         component: () => import('../views/ProductView.vue'),
       },

     ],
   },
   {
    path: "/brands",
        children: [
        {
          path: "",
          name: "BrandsView",
          component: () => import("../views/BrandsView.vue"),
          meta: { title: "Brands" }
      },
      {
        path: ":brand",
        name: "BrandView",
        component: () => import("../views/BrandView.vue")
      },
      {
        path: "products/:id",
        component: () => import('../views/ProductView.vue'),
      },
        ]
   },
 ];
 
 export default routes;
 
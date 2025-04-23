//product routes
import type  { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
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
         props: true,
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
        component: () => import("../views/BrandView.vue"),
        props: true,
      },
      {
        path: "products/:id",
        component: () => import('../views/ProductView.vue'),
        props: true,
      },
        ]
   },
 ];
 
 export default routes;
 
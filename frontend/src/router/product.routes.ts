//product routes
import type  { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
   {
     path: "/products",
     children: [
       {
         path: "",
         component: () => import('../views/ItemsView.vue'),
         meta: { 
          title: "Products",
          description: "Cumpără produse la reducere6 doar la discounter",
          keywords: "msșini de splălat",
          }
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
          meta: { 
            title: "Lista de Branduri",
            description: "Lista de branduri",
            keywords: "aueg, candy, beko, indesit, samsung",
          }
      },
      {
        path: ":brand",
        name: "BrandView",
        component: () => import("../views/BrandView.vue"),
        meta: { 
          title: "Lista de Branduri",
          description: "Lista de branduri",
          keywords: "aueg, candy, beko, indesit, samsung",
        },
        props: true,
      },
      {
        path: "products/:id",
        component: () => import('../views/ProductView.vue'),
        meta: { 
          title: "Produse",
          description: "Lista de produse branduri",
          keywords: "aueg, candy, beko, indesit, samsung",
        },
        props: true,
      },
        ]
   },
 ];
 
 export default routes;
 
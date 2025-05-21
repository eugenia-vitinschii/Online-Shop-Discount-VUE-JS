//admin routes
import type  { RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '@/stores/auth'


const routes: RouteRecordRaw[] = [
  {
    path: "/admin",
    children: [
      {
        path: "",
        component: () => import("../views/Admin/AdminView.vue"),
        meta: { title: "Admin" },
        beforeEnter: (to, from, next) => {
          const authStore = useAuthStore();
          if(authStore.user?.role  === 'admin'){
            next();
          } else {
            next ('/login');
          }
        }
      },
      {
        path: "create",
        component: () => import("../views/Admin/AddProductView.vue"),
        meta: { title: "Create product" }
      },
      {
        path: "update/:id",
        component: () => import("../views/Admin/UpdateView.vue"),
      },
      {
        path: "edit",
        component: () => import("../views/Admin/EditView.vue"),
      },
      {
        path: "create-brand",
        component: () => import("../views/Admin/AddBrandView.vue"),
        meta: { title: "Create brand" }
      },
    ],
  },
];

export default routes;

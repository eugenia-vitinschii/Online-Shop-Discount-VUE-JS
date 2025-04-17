//admin routes
const routes = [
  {
    path: "/admin",
    children: [
      {
        path: "",
        component: () => import("../views/Admin/AdminLoginView.vue"),
        meta: { title: "Admin login" }
      },
      {
        path: "panel",
        component: () => import("../views/Admin/AdminView.vue"),
        meta: { title: "Admin" }
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
  {},
];

export default routes;

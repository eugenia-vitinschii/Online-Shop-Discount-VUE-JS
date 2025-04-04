//admin routes
const routes = [
  {
    path: "/admin",
    children: [
      {
        path: "",
        component: () => import("../views/Admin/AdminLoginView.vue"),
      },
      {
        path: "admin-panel",
        component: () => import("../views/Admin/AdminView.vue"),
      },
      {
        path: "add-product",
        component: () => import("../views/Admin/AddProductView.vue"),
      },
      {
        path: "update/:id",
        component: () => import("../views/Admin/UpdateView.vue"),
      },
      {
        path: "edit-product",
        component: () => import("../views/Admin/EditView.vue"),
      },
      {
        path: "add-brand",
        component: () => import("../views/Admin/AddBrandView.vue"),
      },
    ],
  },
  {},
];

export default routes;

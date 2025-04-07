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
        path: "panel",
        component: () => import("../views/Admin/AdminView.vue"),
      },
      {
        path: "create",
        component: () => import("../views/Admin/AddProductView.vue"),
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
      },
    ],
  },
  {},
];

export default routes;

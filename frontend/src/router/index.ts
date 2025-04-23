//vue router
import { createRouter, createWebHistory } from 'vue-router';
import type {  RouteRecordRaw } from 'vue-router';
//import routes
import adminRoutes from "./admin.routes";
import productRoutes from "./product.routes";
import userRoutes from "./user.routes";
import infoRoutes from "./info.routes"

//routes
const routes: RouteRecordRaw[] = [
   ...adminRoutes,
   ...productRoutes,
   ...userRoutes,
   ...infoRoutes,
];

//create router
const router = createRouter({
   history: createWebHistory(),
   routes,
   scrollBehavior() {
      // Always scroll to top
      return { top: 0 }
 },
})

//create title for views
router.beforeEach((to, from, next) => {
   const defaultTitle = "Discount";
   const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta?.title);
   document.title = nearestWithTitle ? nearestWithTitle.meta!.title as string : defaultTitle;
   next();
});

export default router
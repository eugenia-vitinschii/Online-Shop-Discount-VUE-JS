//vue router
import { createRouter, createWebHistory } from 'vue-router';

//import routes
import adminRoutes from "./admin.routes"
import productRoutes from "./product.routes"
import userRoutes from "./user.routes"
import infoRoutes from "./info.routes"

//routes
const router = createRouter({
   history: createWebHistory(),
   routes: [
   ...adminRoutes,
   ...productRoutes,
   ...userRoutes,
   ...infoRoutes,
],
});

router.beforeEach((to, from, next) => {
   const defaultTitle = "Discount";
   const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
   document.title = nearestWithTitle ? nearestWithTitle.meta.title : defaultTitle;
   next();
 });

export default router
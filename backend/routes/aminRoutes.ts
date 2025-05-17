//routes/adminRoutes.ts

import * as express from 'express';
import { authenticateToken, authorizeAdmin } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/dashboard', authenticateToken, authorizeAdmin, ( req, res) => {
   res.json({ message: 'Welcome to the admin panel!'});
});


export default router;
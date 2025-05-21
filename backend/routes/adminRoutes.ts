//routes/adminRoutes.ts

import  express from 'express';
import { Request, Response, NextFunction } from 'express';
import { authenticateToken, authorizeAdmin } from '../middlewares/authMiddleware';
import {login} from '../controllers/authController'

const router = express.Router();

router.post('/login', login);

router.get('/admin', authenticateToken, authorizeAdmin, ( req: Request, res: Response, next: NextFunction):void => {
  res.json({ message: 'Welcome to the admin panel!'});
});


export default router;
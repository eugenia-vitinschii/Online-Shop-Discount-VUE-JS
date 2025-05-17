//middlewares/authMiddleware.ts (save routing)

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

//secret
const SECRET = 'supersecretkey';

//authenticateToken
export const authenticateToken = ( req: Request, res: Response, next: NextFunction):void => {
   const authHeader = req.headers.authorization;

   const token = authHeader && authHeader.split(' ')[1];

   if(!token) {res.sendStatus(401);
      return;}
   jwt.verify(token, SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      (req as any).user = user;
      next();
   }); 
};

//authorizeAdmin
export const authorizeAdmin = ( req: Request, res: Response, next: NextFunction):void => {
   const user = (req as any).user;

   if(user.role !== 'admin') {
      res.status(403).json({ message: "Admins only!"});
      return;
   }
   next();
};
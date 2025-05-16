//controllers/authController.ts

import { Request, Response } from "express";

import users from '../utils/users';

import bcrypt from "bcrypt";

export const login = ( req: Request, res: Response) => {
   const { name, password } = req.body;
   const user = users.find( u => u.name === name);

   if (!user) {
      return res.status(401).json({ message: 'Not found' });
   }

   const isValid = bcrypt.compareSync(password, user?.password);

   if (!isValid){
      return res.status(401).json({ message: "Invalid password"});
   }

   res.status(200).json({ message: 'Login successful', user: { id: user.id, role: user.role} })

};
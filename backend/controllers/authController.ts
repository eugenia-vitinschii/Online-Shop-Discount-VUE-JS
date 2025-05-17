//controllers/authController.ts

import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

import users from '../utils/users';

const SECRET = 'supersecretkey';

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

   const token = jwt.sign(
      {
         id: user.id,
         role: user.role,
      },
      SECRET,
      { expireIN: '1h'}
   )

   res.status(200).json({ message: 'Login successful', token})

};
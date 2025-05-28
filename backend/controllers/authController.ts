//controllers/authController.ts

import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

import users from '../utils/users';

const SECRET = 'supersecretkey';

//register
export const register = async (req: Request, res: Response):Promise<void> => {
   const { name, password, email} = req.body;

   //existing user
   const existingUser = users.find(u => u.name === name || u.email === email);

   if(existingUser) {
      res.status(400).json({ message: 'Acest utilizator exista!'});
      return;
   }

   //hash password
   const hashedPassword = await bcrypt.hash(password, 10);

   const newUser = {
      id: Date.now(),
      name,
      email,
      password: hashedPassword,
      role: 'user' as 'user',
   }

   users.push(newUser);

   const token = jwt.sign(
      {
         id: newUser.id,
         role: newUser.role,
      },
      SECRET,
      {
         expiresIn: '1h'
      }
   );

   res.status(201).json({ message: 'Utilizatorul a fost creat cu succes', token})

}; 

//login
export const login = ( req: Request, res: Response):void => {
   const { name, password } = req.body;
   const user = users.find( u => u.name === name);

   if (!user) {
      res.status(401).json({ message: 'Not found' });
      return 
   }

   const isValid = bcrypt.compareSync(password, user.password);

   if (!isValid){
       res.status(401).json({ message: "Invalid password"});return
   }

   const token = jwt.sign(
      {
         id: user.id,
         role: user.role,
      },
      SECRET,
      { expiresIn: '1h'}
   )

   res.status(200).json({ message: 'Login successful', token})

};




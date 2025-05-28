//users.ts

import bcrypt from "bcrypt";
import {User} from '../models/userModel';


const users: User[] = [
   {
      id: "oiu3f",
      name: 'admin',
      email: '123@err.rt',
      password: bcrypt.hashSync('admin123', 10),
      role: 'admin'
   },{
      id: "oiu33434f",
      name: 'user',
      email: '135423@err.rt',
      password: bcrypt.hashSync('user123', 10),
      role: 'user'
   }
]

export default users;
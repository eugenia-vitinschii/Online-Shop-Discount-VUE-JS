//users.ts

import bcrypt from "bcrypt";
import {User} from '../models/userModel';


const users: User[] = [
   {
      id: "oiu3f",
      name: 'admin',
      password: bcrypt.hashSync('admin123', 10),
      role: 'admin'
   },{
      id: "oiu33434f",
      name: 'user',
      password: bcrypt.hashSync('user123', 10),
      role: 'user'
   }
]

export default users;
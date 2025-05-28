// models/userModel.ts

export interface User {
  id: string | number;
  name: string;
  password: string;
  email: string;
  role: 'admin' | 'user';
}
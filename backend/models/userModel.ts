// models/userModel.ts

export interface User {
  id: string;
  name: string;
  password: string;
  role: 'admin' | 'user';
}
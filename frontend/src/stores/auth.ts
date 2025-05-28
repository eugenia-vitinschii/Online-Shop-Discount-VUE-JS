//src/store/auth.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

import axios from 'axios';

//user interface
interface User {
  id: string
  name: string
  email: string
  password: string
  role: 'admin' | 'user'
}

//PARSE JWT
interface JwtPayload {
  id: string;
  role: 'admin' | 'user';
  iat?: number;
  exp?: number;
}

function parseJwt(token: string): JwtPayload | null {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}
//PARSE JWT

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(localStorage.getItem('token'))

  const setAuth = (data: { user: User; token: string }) => {
    user.value = data.user
    token.value = data.token
    localStorage.setItem('token', data.token)
  }
  //logout
  const logOut = () => {
    user.value = null
    token.value = null
    localStorage.removeItem('token')
  }

  //login
  const login = async (credentials: { name: string; password: string }) => {
    const response = await axios.post('http://localhost:4000/admin/login', credentials);
    const token = response.data.token;

    const payload = parseJwt(token);

    setAuth({ user: { id: payload.id, name: credentials.name, role: payload.role, password: '' }, token });
  }

  //register
  const register = async (credentials: { name: string; email: string; password: string }) => {
    const response = await axios.post('http://localhost:4000/admin/register', credentials);
    const token = response.data.token;

    const payload = parseJwt(token);

    setAuth({ user: { id: payload.id, name: credentials.name, email: credentials.email, role: payload.role, password: '' }, token });
  }

  return { user, token, setAuth, logOut, login, register }
})



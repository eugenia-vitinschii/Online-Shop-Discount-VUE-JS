//src/store/auth.ts

import { defineStore } from 'pinia';
import {ref} from 'vue';


//user interface
interface User  {
   id: string
   name: string
   password: string
   role: 'admin' | 'user'
}

export const useAuthStore = defineStore( 'auth', () => {
   const user = ref<User| null>(null)
   const token = ref<string | null>(localStorage.getItem('token'))

   const setAuth = (data: { user: User; token: string}) => {
      user.value = data.user
      token.value = data.token
      localStorage.setitem('token', data.token)
   }

   const logOut = () => {
      user.value = null
      token.value = null
      localStorage.removeItem('token')
   }

   return { user, token, setAuth, logOut}
})
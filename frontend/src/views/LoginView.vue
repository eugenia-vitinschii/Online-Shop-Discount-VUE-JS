<template>
   <div class="login">
      <div class="container">
         <div class="login__wrapper">
            <p class="heading">Login</p>
            <form @submit.prevent="handleLogin">
               <!-- input wrapper -->
               <div class="input__wrapper">
                  <label>Nume</label>
                  <input 
                  type="text" 
                  v-model="userName" 
                  placeholder="Numele" />
               </div>
               <!-- input wrapper -->
               <div class="input__wrapper">
                  <label>Parola</label>
                  <input 
                     v-model="password" 
                     type="password" 
                     placeholder="Parola" 
                     required />
               </div>
               <button type="submit" class="button">Intra</button>
            </form>
         </div>
      </div>
   </div>

</template>

<script setup lang="ts">
//vue
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

//component settings
defineOptions({
   name: "LoginView",
});

//variables
const userName = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

//login 
const handleLogin = async () => {
   try {
      await authStore.login({
         name: userName.value,
         password: password.value
      })
      //push to route using role
      if (authStore.user?.role === 'admin') {
         router.push('/admin')
      } else {
         router.push('/')
      }
   } catch (error) {
      alert('Error!')
   }
}

</script>
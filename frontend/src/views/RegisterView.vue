<template>
<div class="register"> 
   <div class="container">
      <div class="register__wrapper">
         <div class="register__form">
            <p class="heading">Înregistrează-te</p>
            <form @submit.prevent="onSubmit">
               <!-- input wrapper -->
               <div class="input__wrapper">
                  <label>Nume</label>
                  <input 
                  type="text" 
                   v-model="name"
                  placeholder="user989" />
                  <p
                  class="body-text-red"
                  v-if="errors.name"
                  >
                  {{ errors.name }}
               </p>
               </div>
               <!-- input wrapper -->
               <div class="input__wrapper">
                  <label>Email</label>
                  <input 
                  type="email" 
                  v-model="email"
                  placeholder="name@mail.domain" />
                  <p
                  class="body-text-red"
                  v-if="errors.email"
                  >
                  {{ errors.email }}
               </p>
               </div>
               <!-- input wrapper -->
               <div class="input__wrapper">
                  <label>Parola</label>
                  <div class="input-password">
                     <input 
                     v-model="password" 
                     :type="showPassword ? 'text' : 'password'"
                     placeholder="••••••••••" 
                     required 
                     />
                  <button
                     @click="showPassword = !showPassword"
                     >
                     <svg
                     v-if="showPassword"
                     xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
                  </svg>
                  <svg
                  v-else
                   xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/>
                  </svg>
                   </button>
                  </div>
                     <p 
                     class="body-text-red"
                      v-if="errors.password"
                     >
                     {{ errors.password}}
                  </p>
               </div>
               <!-- input wrapper -->
               <div class="input__wrapper">
                  <label>Confirmă parola</label>
                  <div class="input-password">
                     <input 
                     v-model="confirmPassword" 
                     :type="showConfirmedPassword ? 'text' : 'password'"
                     placeholder="••••••••••" 
                     required 
                     />
                     <button
                     @click="showConfirmedPassword = !showConfirmedPassword"
                     >
                     <svg
                     v-if="showConfirmedPassword"
                     xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
                  </svg>
                  <svg
                 v-else
                   xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/>
                  </svg>
                   </button>
                  </div>
                     <p 
                     v-if="errors.confirmPassword"
                     class="body-text-red"
                    
                     >
                      {{ errors.confirmPassword }}
                  </p>
               </div>
                <p 
                     class="body-text-red"
                    v-if="registerError"
                     >
                    {{ registerError }}
                  </p>
               <button type="submit" class="button login__button">Intră</button>
              
            </form>
            <p class="body-text">Deja sunteți înregistrat? <router-link to="/login">Intră</router-link> </p>
         </div>
         
      </div>
   </div>
</div>
</template>

<script setup lang="ts">
//vue 
import { defineOptions, ref } from 'vue'

//router
import { useAuthStore } from '@/stores/auth';
import { useRouter} from 'vue-router';

//vee validate, yup
import * as yup from 'yup'
import { useForm, useField} from 'vee-validate'

//pinia
const authStore = useAuthStore()
const router = useRouter()

//Component settings
defineOptions({
  name: 'RegisterView'
})

//router
const registerError = ref('')

//validate schema
const schema = yup.object ({
   name: yup.string().required('Introduceti numele').min(4, 'Cel putin 4 caractere'),
   email: yup.string().required('Introduceti email').email('Email invalid'),
   password: yup.string().required('Introduceti parola').min(6, 'cel putin 6 caractere'),
   confirmPassword: yup.string().required('Confirmati parola').oneOf([yup.ref('password')], 'Parolele nu coincid'),
})

//use form with yuo
const {handleSubmit, errors } = useForm({
   validationSchema: schema
})

//variables
const { value: name} = useField<string>('name')
const { value: email} = useField<string>('email')
const { value: password } = useField<string>('password')
const { value: confirmPassword} = useField<string>('confirmPassword')

const showPassword = ref(false)
const showConfirmedPassword = ref(false)
//submit
const onSubmit = handleSubmit(async (values) =>{
   registerError.value = ''

   try{
      await authStore.register(values)
      router.push('/login')
   } catch (error: any){
         if( error.response?.status === 401){
         registerError.value = 'Numele sau parola sunt incorecte'
      } else{
         registerError.value= 'eroare necunoscuta'
      }
   }
})

</script>

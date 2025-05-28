<template>
<div class="register"> 
   <div class="container">
      <div class="register__wrapper">
         <div class="register__form">
            <p class="heading">Inregistrare</p>
            <form @submit.prevent="onSubmit">
               <!-- input wrapper -->
               <div class="input__wrapper">
                  <label>Nume</label>
                  <input 
                  type="text" 
                   v-model="name"
                  placeholder="Numele" />
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
                  placeholder="Email" />
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
                  <input 
                      v-model="password"
                     type="password" 
                     placeholder="Parola" 
                     required 
                     />
                     <p 
                     class="body-text-red"
                      v-if="errors.password"
                     >
                     {{ errors.password}}
                  </p>
               </div>
               <!-- input wrapper -->
               <div class="input__wrapper">
                  <label>Confirma parola</label>
                  <input 
                     v-model="confirmPassword"
                     type="password" 
                     placeholder="Parola" 
                     required 
                     />
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
               <button type="submit" class="button">Intra</button>
              
            </form>
            <p class="body-text">Deja sunteti inregistrat? <router-link to="/login">Intra</router-link> </p>
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

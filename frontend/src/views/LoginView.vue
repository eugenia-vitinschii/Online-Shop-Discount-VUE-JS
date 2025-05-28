<template>
   <div class="login">
      <div class="container">
         <div class="login__wrapper">
            <div class="login__form">
            <p class="heading">Login</p>
            <form @submit.prevent="onSubmit">
               <!-- input wrapper -->
               <div class="input__wrapper">
                  <label>Nume</label>
                  <input 
                  type="text" 
                  v-model="userName" 
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
                <p 
                     class="body-text-red"
                     v-if="loginError"
                     >
                     {{ loginError}}
                  </p>
               <button type="submit" class="button">Intra</button>
              
            </form>
             <p class="body-text">Nu sunteti inregistrat? <router-link to="/register">registrate</router-link> </p>
            </div>
         </div>
      </div>
   </div>

</template>

<script setup lang="ts">
//validate
import { useForm, useField} from 'vee-validate';
import * as yup from 'yup';


//vue
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

//component settings
defineOptions({
   name: "LoginView",
});

//variables
const loginError = ref('')

const authStore = useAuthStore()
const router = useRouter()

//create schema
const schema = yup.object({
   name: yup.string().required('Name').min(4, 'cel putin 4 caractere'),
   password: yup.string().required('enter password').min(6, 'cel putin 6 caractere'),
})

//use Form with yup
const {handleSubmit, errors } = useForm({
   validationSchema: schema
})

const { value: userName} = useField<string>('name');
const { value: password} = useField<string>('password');

//login 
const onSubmit = handleSubmit( async (values) => {
   loginError.value = ''
   try {
      await authStore.login(values)
      //push to route using role
      if (authStore.user?.role === 'admin') {
         router.push({ path: "/admin" });
      } else {
         router.push('/products')
         console.log(password.value)
      }
   } catch (error: any) {
      console.log('Login error: ', error)
      if( error.response?.status === 401){
         loginError.value = 'Numele sau parola sunt incorecte'
      } else{
         loginError.value= 'eroare necunoscuta'
      }
   }
} ) 
</script>
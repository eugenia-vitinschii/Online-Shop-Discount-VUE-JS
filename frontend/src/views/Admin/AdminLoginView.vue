<template>
  <div>

  <div class="login">
    <div class="container">
      <div class="login__wrapper">
        <p class="heading">Login page</p>
                     <router-link class="green-button" to="/create"> Add Product </router-link>
             <router-link class="green-button" to="/edit"> Edit Product </router-link>
             <router-link class="green-button" to="/create-brand"> Add  brand</router-link>
        <div  class="login__form">
          <p class="heading">name {{ name }}</p>
          <p class="heading">password {{ password }}</p>
          <form class="add__form">
            <the-input 
            :label="'Introduceți numele'" 
            :placeholder="'name'"
            v-model="name"
            />
            <the-input 
            :label="'Introduceți parola'" 
            :placeholder="'password'" 
            v-model="password"
            />
            <the-button class="green-button" > LoginUp </the-button>
            <the-button class="red-button">Acasă</the-button>
          </form>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>     
    
<script setup lang="ts">
import { defineOptions, defineModel } from "vue";


import TheInput from "@/components/TheInput.vue";
import TheButton from "@/components/TheButton.vue";



 

defineOptions({
  name: "AdminLoginView",
});


const name = defineModel('name');
const password = defineModel('password');

</script>



<style lang="scss" >
.login {
  &__form {
    background: $white;
    width: 400px;
  }
}
</style>
<template>
  <div class="subscribe">
   <div class="container">
      <div class="subscribe__wrapper">
         <p class="heading">Abonează-te la newsletter</p>
         <p class="subheading">Fii la curent cu noutăți, reduceri și promoții exclusive.</p>
         <form 
         class="subscribe__form"
         @submit.prevent="submitEmail"
         >
            <div class="input__wrapper">
               <input 
               v-model="email"
               placeholder="Introduceți adresa dvs. de email"
               type="email"
               >
               <div class="subscribe__agree">
              <input type="checkbox"   switch checked disabled />
              <label class="body-text">Sunt deacord cu <a href="/">termeni și condiții</a></label>
            </div>
               <button type="submit" class="subscribe__button">Trimite</button>
          </div>
         </form>
      </div>
   </div>
  </div>
</template>

<script setup lang="ts">
//vue 
import { defineOptions , ref} from 'vue'

//Component settings
defineOptions({
  name: 'TheSubscribe'
})

const email = ref('');

function submitEmail() {
   console.log("email: email.value")
   email.value = ''
}
</script>

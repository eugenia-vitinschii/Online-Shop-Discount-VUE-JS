<template>
  <!-- go back button -->
  <div class="router__button" >
    <button class="icon-svg" @click="$router.go(-1)"  :class="promo ? 'white-router' : 'blue-router'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e8eaed"
      >
        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
      </svg>
    </button>
  </div>
   <!--links-->
  <div class="router__link">
    <router-link  to="/" :class="promo ? 'white-router' : 'blue-router'" > Pagina principala </router-link>
  </div>
  <!--links-->
  <div class="router__link" >
    <router-link  to="/products" :class="promo ? 'white-router' : 'blue-router'" >/ Produse</router-link>
  </div>
</template>

<script setup>
//vue
import { defineOptions, defineProps } from "vue";

//vue
defineOptions({
  name: "TheRouter",
});

//props
defineProps({
  promo:{
    type: Boolean,
    default: false
  }
})
</script>


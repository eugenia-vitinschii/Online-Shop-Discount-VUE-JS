<template>
<!-- cart item -->
  <div class="cart__item">
    <div class="cart__img">
       <router-link :to="'/product/' + id">
          <img :src="img" alt="no img" />
      </router-link>
    </div>
    <div class="cart__description">
      <div class="cart__info">
        <p class="body-text bold">{{ productName }}</p>
        <p class="body-text">Producător: {{ brand }}</p>
      </div>
    </div>
    <div class="cart__prices">
      <p class="body-text">Preț: {{ price }} lei</p>
        <div class="cart__prices-discount" v-if="!saveMoney == 0">
        <p class="body-text">Reducere {{ discount }}%</p>
        <p class="body-text-green">- {{ saveMoney }} lei </p>
        <p class="body-text bold">Pret Nou: {{ newPrice }}</p>
      </div>
    </div>
    <div class="cart__delete">
      <button class="button-svg"   
         >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-440v-80h560v80H200Z"/></svg>
        </button>
    </div>
  </div>
</template>


<script setup>
//import vue
import { defineOptions, defineProps } from "vue";


//component settings
defineOptions({
  name: "ShoppingItem",
});

//props component
defineProps({
  id:{
    type: String,
  },
  img: {
    type: String,
  },
  productName: {
    type: String,
  },
  brand: {
    type: String,
  },
  discount: {
    type: Number,
  },
  price: {
    type: Number,
  },
  saveMoney: {
    type: Number,
  },
  newPrice: {
    type: Number,
  },
});
</script>
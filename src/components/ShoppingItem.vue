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
        <div class="cart__prices-discount" v-show="discount > 0">
        <p class="body-text">Reducere {{ discount }}%</p>
        <p class="body-text-green"> - {{ savedMoney }} lei </p>
        <p class="body-text bold bolt"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/></svg> {{ discountPrice }}</p>
      </div>
    </div>
    <div class="cart__delete tooltip">
      <span class="tooltip-text small-text">șterge</span>
      <button class="button-svg"   
         @click="$emit('deleteItem')">
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

  price: {
    type: Number,
  },
    discount: {
    type: Number,
  },
 savedMoney: {
    type: Number,
  },
  discountPrice: {
    type: Number,
  },
});

</script>
<template>
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
        <p class="body-text-red">- {{ saveMoney }} lei /</p>
        <p class="body-text bold">Pret Nou: {{ newPrice }}</p>
      </div>
    </div>
  </div>
</template>


<script setup>
import { defineOptions } from "vue";
import { defineProps } from "vue";

defineOptions({
  name: "ShoppingItem",
});

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
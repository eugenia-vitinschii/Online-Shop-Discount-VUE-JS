<template>
<!-- brand section -->
 <brands-section/>
<div class="swiper">
  <div class="container">
    <div class="swiper__wrapper">
      <the-slider/>
    </div>
  </div>
</div>
<div class="delivery">
    <div class="container">
      <div class="delivery__wrapper">
        <delivery-item
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :img="item.img"
          :name="item.name"
          :body="item.body"
        />
      </div>
    </div>
  </div>
<!-- top products -->
  <the-top-products-slider/>

 <!-- watched section -->
  <div class="watched-products">
    <h2>Recently Viewed</h2>
    <div class="watched-grid">
      <div v-for="product in watchedStore.watched" :key="product.id" class="watched-item">
        <p>item :</p>
        <p>{{ product.productName }}</p>
        <p>{{ product.price }} lei</p>
      </div>
    </div>
  </div>
</template>


<script setup>
//vue
import { defineOptions } from "vue";

//import components
import DeliveryItem from "@/components/DeliveryItem.vue"
import TheSlider  from "@/sections/TheSlider.vue";
import BrandsSection from "@/sections/BrandsSection.vue"
import TheTopProductsSlider   from "@/sections/TheTopProductsSlider.vue";

defineOptions({
  name: "HomeView",
});

const items = [
  {
    id: "1",
    img: require("@/assets/img/delivery-1.svg"),
    name: "Service și garanție",
    body: "Rețea proprie de centre de servicii",
  },
  {
    id: "2",
    img: require("@/assets/img/delivery-2.svg"),
    name: "Livrare în toată Moldova",
    body: "Livrarea de la 1 la 2 zile de la data comenzii",
  },
  {
    id: "3",
    img: require("@/assets/img/delivery-3.svg"),
    name: "Încredere și fiabilitate",
    body: "20 de ani pe piață",
  },
  {
    id: "4",
    img: require("@/assets/img/delivery-4.svg"),
    name: "Returnare și schimbare",
    body: "În termen de 14 zile",
  },
];


 import { useWatchedProductsStore } from '@/stores/watchedProducts';

const watchedStore = useWatchedProductsStore();
watchedStore.loadFromLocalStorage();
</script>
 
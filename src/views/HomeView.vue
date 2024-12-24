<template>
<div class="swiper">
  <div class="container">
    <div class="swiper__wrapper">
      <the-slider/>
    </div>
  </div>
</div>
<div class="brands">
  <div class="container">
    <div class="brands__wrapper">
      <brands-section
      v-for="item in brands"
      :key="item.id"
      :img="item.img"
      :brand="item.brand"
      />
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
</template>


<script setup>
//vue
import { defineOptions } from "vue";

//import components
import DeliveryItem from "@/components/DeliveryItem.vue"
import TheSlider  from "@/sections/TheSlider.vue";
import BrandsSection from "@/sections/BrandsSection.vue"

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


const brands = [
  {
    id: 1,
    img: require("@/assets/img/brands/aeg.png"),
    brand: 'AEG'
  },
    {
    id: 2,
    img: require("@/assets/img/brands/beko.jpg"),
    brand: 'Beko'
  },
    {
    id: 3,
    img: require("@/assets/img/brands/candy.jpg"),
    brand: 'Candy'
  },
    {
    id: 4,
    img: require("@/assets/img/brands/electrolux.png"),
    brand: 'Electrolux'
  },
      {
    id: 5,
    img: require("@/assets/img/brands/indesit.png"),
    brand: 'Indesit'
  },
        {
    id: 6,
    img: require("@/assets/img/brands/samsung.jpg"),
    brand: 'Samsung'
  },
          {
    id: 7,
    img: require("@/assets/img/brands/whirlpool.png"),
    brand: 'Whirlpool'
  },
  
]
</script>
 
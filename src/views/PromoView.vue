<template>
      <div class="router">
          <div class="container">
            <div class="router__wrapper">
              <the-router />
              <div class="router__link">
                <p class="header__link">/ Promo</p>
              </div>
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
  <div class="promo">
    <div class="container">
      <div class="promo__wrapper">
  
      </div>
    </div>
  </div>
</template>

<script setup>
//vue
import { defineOptions } from "vue";
//components
import TheRouter from "@/sections/TheRouter.vue";
import BrandsSection from "@/sections/BrandsSection.vue";

//component 
defineOptions({
  name: "PromoView",
});

// const

const brands = [
  {
    id: 1,
    img: require("@/assets/img/brands/aeg.png"),
    brand: "AEG",
  },
  {
    id: 2,
    img: require("@/assets/img/brands/beko.jpg"),
    brand: "Beko",
  },
  {
    id: 3,
    img: require("@/assets/img/brands/candy.jpg"),
    brand: "Candy",
  },
  {
    id: 4,
    img: require("@/assets/img/brands/electrolux.png"),
    brand: "Electrolux",
  },
  {
    id: 5,
    img: require("@/assets/img/brands/indesit.png"),
    brand: "Indesit",
  },
  {
    id: 6,
    img: require("@/assets/img/brands/samsung.jpg"),
    brand: "Samsung",
  },
  {
    id: 7,
    img: require("@/assets/img/brands/whirlpool.png"),
    brand: "Whirlpool",
  },
];
</script>

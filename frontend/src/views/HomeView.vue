<template>
  <div>

  <div>

  <div>

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
<!-- promo -->
<div class="offer"> 
  <div class="container">
    <div class="offer__container">
      <router-link to="/products/vr9l8dC">
        <img src="@/assets/img/home-promo/promo-home.jpg" alt="prommo">
      </router-link>
      
    </div>
  </div>
</div>
 <!-- watched section -->
<recently-wached-slider/>
<!-- promo -->
<div class="offer"> 
  <div class="container">
    <div class="offer__container">
      <router-link to="/promo">
        <img src="@/assets/img/home-promo/promo-home-2.jpg" alt="prommo">
      </router-link>
      
    </div>
  </div>
</div>

  </div>

  </div>

  </div>
</template><script setup>
//vue
import { defineOptions } from "vue";

//import components
import DeliveryItem from "@/components/DeliveryItem.vue"
import TheSlider  from "@/sections/TheSlider.vue";
import BrandsSection from "@/sections/BrandsSection.vue"
import TheTopProductsSlider from "@/sections/Sliders/TheTopProductsSlider.vue"
import RecentlyWachedSlider from "@/sections/Sliders/RecentlyWachedSlider.vue";

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

</script>
 
<template>
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
        <picture>
          <source media="(max-width: 800px)" srcset="@/assets/img/home-promo/mobile-2.jpg">
        <img src="@/assets/img/home-promo/pc-2.jpg" alt="prommo"> 
        </picture>
       
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
        <picture>
               <source media="(max-width: 800px)" srcset="@/assets/img/home-promo/mobile-1.jpg">
        <img src="@/assets/img/home-promo/pc-1.jpg" alt="prommo">
        </picture>
    
      </router-link>
      
    </div>
  </div>
</div>

  </div>
</template>

<script setup lang="ts">
//import components
import DeliveryItem from "@/components/DeliveryItem.vue"
import TheSlider  from "@/sections/TheSlider.vue";
import BrandsSection from "@/sections/BrandsSection.vue"
import TheTopProductsSlider from "@/sections/Sliders/TheTopProductsSlider.vue"
import RecentlyWachedSlider from "@/sections/Sliders/RecentlyWachedSlider.vue";

 

defineOptions({
  name: "HomeView",
});

interface Item {
  id: string;
  img: string;
  name: string;
  body: string
}

const items: Item[] = [
  {
    id: "1",
    img: new URL("@/assets/img/4.jpg", import.meta.url).href,
    name: "Service și garanție",
    body: "Rețea proprie de centre de servicii",
  },
  {
    id: "2",
    img:  new URL("@/assets/img/1.jpg", import.meta.url).href,
    name: "Livrare în toată Moldova",
    body: "Livrarea de la 1 la 2 zile de la data comenzii",
  },
  {
    id: "3",
    img:  new URL("@/assets/img/2.jpg", import.meta.url).href,
    name: "Încredere și fiabilitate",
    body: "20 de ani pe piață",
  },
  {
    id: "4",
    img: new URL("@/assets/img/3.jpg", import.meta.url).href,
    name: "Returnare și schimbare",
    body: "În termen de 14 zile",
  },
];

</script>
 
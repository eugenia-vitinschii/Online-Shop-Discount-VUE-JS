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
<!-- brand section -->
 <brands-section/>
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


</script>

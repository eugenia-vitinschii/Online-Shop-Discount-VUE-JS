<template>
  <div class="brands">
    <div class="container">
      <!-- brand wrapper -->
      <swiper
        class="brands__wrapper"
        v-if="created"
        :breakpoints="{
          1054: {
            slidesPerView: 9,
          },
          896: {
            slidesPerView: 7,
          },
          663: {
            slidesPerView: 6,
          },
          465: {
            slidesPerView: 5,
          },
          300: {
            slidesPerView: 3,
          },
        }"
        :autoplay="{
          delay: 500,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        }"
        :enabled="true"
        :modules="modules"
      >
        <swiper-slide
          class="brands__item"
          data-swiper-autoplay="2000"
          v-for="brand in store.brands"
          :key="brand.id"
        >
          <brand-section-item
            :id="brand.id"
            :img="brand.img"
            :brand="brand.brand"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>


<script setup lang="ts">
//vue
import { defineOptions, ref, onMounted } from "vue";

// component information
defineOptions({
  name: "BrandsSection",
});
//components
import BrandSectionItem from "./BrandSectionItem.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { Autoplay  } from "swiper/modules";

// Import Swiper styles
import "swiper/scss";

import "swiper/scss/autoplay";

//component data
let created = ref(false);

// Swiper modules
const modules = [Autoplay];
//pinia store
import { useBrandsStore } from "@/stores/brands";

//pinia variables
const store = useBrandsStore();
const { fetchBrands } = store;


//hooks
onMounted(() => {
  created.value = true;
  fetchBrands();
});


</script>  


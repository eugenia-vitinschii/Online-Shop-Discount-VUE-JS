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
        }"
        :autoplay="{
          delay: 500,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          stopOnLastSlide: false,
          disableOnInteraction: true,
        }"
        :enabled="true"
        :modules="modules"
      >
        <swiper-slide
          class="brand__item"
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

<script setup>
//vue
import { defineOptions, ref, onMounted } from "vue";

// component information
defineOptions({
  name: "BrandsSection",
});
//components
import BrandSectionItem from "./BrandSectionItem.vue";

//component data
let created = ref(false);

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

 <script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/scss";

import "swiper/scss/autoplay";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Navigation],
    };
  },
};
</script>

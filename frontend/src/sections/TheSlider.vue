<template>
  <div>

  <swiper
  
    :pagination="{
      type: 'fraction',
       clickable: true,
    }"
       :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
    }"
      :keyboard="{
      enabled: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <router-link to="/products/A9Paomr">
        <img src="@/assets/img/swiper-home1.jpg" alt="#" />
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/products/Nw8c8Gp">
        <img src="@/assets/img/swiper-home2.jpg" alt="#" />
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/products/GWg3ACA">
        <img src="@/assets/img/swiper-home3.jpg" alt="#" />
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/products/products">
        <img src="@/assets/img/swiper-home4.jpg" alt="#" />
      </router-link>
    </swiper-slide>

  </swiper>

  </div>
</template>
 

  <script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay,Pagination, Navigation ,Keyboard,} from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay,Pagination, Navigation, Keyboard,],
    };
  },
};
</script>
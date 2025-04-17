<template>
  <div class="i" v-show="watchedStore.watched.length > 1">
    <div class="container">
      <div class="i__wrapper">
        <div class="i__title">
          <p class="heading">Recente</p>
        </div>
        <swiper
            :breakpoints= "{
            1366:{slidesPerView: 6},
            1248:{slidesPerView: 5},
            1115:{slidesPerView: 4},
            877:{slidesPerView: 3},
            658:{slidesPerView: 2},
            458:{slidesPerView: 1}
            }"
          :autoplay="{
            delay: 500,
    stopOnLastSlide: false,
          }"
          :enabled="true"
          :modules="[Autoplay]"
          class="i__swiper"
        >
          <swiper-slide
          data-swiper-autoplay="2000"
            v-for="product in watchedStore.watched"
            :key="product.id"
            class="item__container"
          >
            <the-item
              :id="product.id"
              :brand="product.brand"
              :img="product.img"
              :productName="product.productName"
              :productType="product.productType"
              :price="product.price"
              :discount="product.discount"
              :discountPrice="product.discountPrice"
              :savedMoney="product.savedMoney"
              :label="product.label"
              :stock="product.stock"
              :disabledValue="product.stock"
              :monthlyPrice="monthlyPrice(product.price)"
              :hidden="showPrices(product.discount)"
              :oldPrice="showOnePrice(product.discount)"
              :dicountLabel="dicountLabel(product.discount)"
              :hugeSaleLabel="hugeSaleLabel(product.discount)"
              @addToCard="addProductCard(product)"
              @addToFavorite="addProductToFavorite(product)"
            />
          </swiper-slide>

        </swiper>
      </div>
    </div>
  </div>
</template>

 
 <script setup>
//vue 
import { defineOptions, onMounted } from "vue";


//component settings
defineOptions({
   name: "RecentlyWachedSlider"
})

//components
import TheItem from "@/sections/TheItem.vue";

//pinia
import { useProductStore } from "@/stores/product";
import { useWatchedProductsStore } from '@/stores/watchedProducts';
 
// import { storeToRefs } from "pinia";

//pinia variables
const store = useProductStore();
const watchedStore = useWatchedProductsStore();

// const { getItemsByBrand } = storeToRefs(store);

//pinia actions
const {
  fetchProducts,
  addToCart,
  addToFavorite,
  monthlyPrice,
  dicountLabel,
  hugeSaleLabel,
  showPrices,
  showOnePrice,
} = store;

// add product to cart
function addProductCard(product) {
    addToCart(product);
}
//add to favorite
function addProductToFavorite(product) {
  addToFavorite(product)
}

//hooks
onMounted(() => {
  fetchProducts();
  watchedStore.loadFromLocalStorage();
});

</script>


<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/scss";

import "swiper/scss/autoplay";

// import required modules
import {
  Autoplay,
} from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>

 
 
 
 
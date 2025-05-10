<template>
  <div>

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
            467:{slidesPerView: 2}
            }"
          :autoplay="{
            delay: 500,
    stopOnLastSlide: false,
          }"
          :enabled="true"
          :modules="modules"
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
              :product="product"
              :brand="product.brand"
              :img="product.img"
              :productName="product.productName"
              :type="product.type"
              :price="product.price"
              :discount="product.discount"
              :discountPrice="product.discountPrice"
              :savedMoney="product.savedMoney"
              :stock="product.stock"
              :disabledValue="product.stock"
              :monthlyPrice="monthlyPrice(product.price)"
              :hidden="showPrices(product.discount)"
              :oldPrice="showOnePrice(product.discount)"
              :discountLabel="discountLabel(product.discount)"
              :hugeSaleLabel="hugeSaleLabel(product.discount)"
              @addToCard="addProductCard(product)"
              @addToFavorite="addProductToFavorite(product)"
            />
          </swiper-slide>

        </swiper>
      </div>
    </div>
  </div>

  </div>
</template>
 
 <script setup lang="ts">
//vue 
import { defineOptions, onMounted } from "vue";


//component settings
defineOptions({
   name: "RecentlyWachedSlider"
})

//components
import TheItem from "@/sections/TheItem.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
// import required modules

import { Autoplay  } from "swiper/modules";

const modules = [Autoplay];
//pinia
import { useProductStore } from "@/stores/product";
import { useWatchedProductsStore } from '@/stores/watchedProducts';
 
//product
import type {Product} from "@/models/product";

//pinia variables
const store = useProductStore();
const watchedStore = useWatchedProductsStore();

//pinia actions
const {
  fetchProducts,
  addToCart,
  addToFavorite,
  monthlyPrice,
  discountLabel,
  hugeSaleLabel,
  showPrices,
  showOnePrice,
} = store;

// add product to cart
function addProductCard(product: Product) {
    addToCart(product);
}
//add to favorite
function addProductToFavorite(product: Product) {
  addToFavorite(product)
}

//hooks
onMounted(() => {
  fetchProducts();
  watchedStore.loadFromLocalStorage();
});

</script>



 
 
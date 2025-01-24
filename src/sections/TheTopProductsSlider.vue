<template>
  <div class="i">
    <div class="container">
      <div class="i__wrapper">
        <div class="i__title">
          <p class="heading">Produse Top</p>
        </div>
        <swiper
          :slidesPerView="4"
          :spaceBetween="30"
          :pagination="{
            clickable: false,
          }"
          :navigation="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :keyboard="{
            enabled: true,
            onlyInViewport: true,
          }"
          :modules="modules"
          class="i__swiper"
        >
          <swiper-slide
          data-swiper-autoplay="2000"
            v-for="product in getItemsByBrand('Beko')"
            :key="product.id"
          >
            <the-item
              :id="product.id"
              :brand="product.brand"
              :img="product.img"
              :productName="product.productName"
              :productType="product.productType"
              :price="product.price"
              :discount="product.discount"
              :label="product.label"
              :stock="product.stock"
              :newPrice="getNewPrice(product.price)(product.discount)"
              :economie="getMoneySaved(product.price)(product.discount)"
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
//vue , router
import { onMounted } from "vue";

//components

import TheItem from "@/sections/TheItem.vue";

//pinia
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

const store = useProductStore();

const { getItemsByBrand } = storeToRefs(store);

const {
  fetchProducts,
  addToCart,
  addToFavorite,
  getMoneySaved,
  getNewPrice,
  monthlyPrice,
  dicountLabel,
  hugeSaleLabel,
  showPrices,
  showOnePrice,
} = store;
// add product to cart
function addProductCard(product) {
  addToCart({
    id: product.id,
    productCode: product.productCode,
    productName: product.productName,
    price: product.price,
    discount: product.discount,
    img: product.img,
    brand: product.brand,
  });
}
//add to favorite
function addProductToFavorite(product) {
  addToFavorite({
    id: product.id,
    productCode: product.productCode,
    productName: product.productName,
    price: product.price,
    discount: product.discount,
    img: product.img,
    brand: product.brand,
    label: product.label,
    stock: product.stock,
  });
}
//hooks
onMounted(() => {
  fetchProducts();
});
</script>


<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/keyboard";
// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  Keyboard,
} from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation, Scrollbar, Keyboard],
    };
  },
};
</script>

 
 
 
 
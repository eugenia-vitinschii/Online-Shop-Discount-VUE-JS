<template>
  <div class="i">
    <div class="container">
      <div class="i__wrapper">
        <div class="i__title">
          <p class="heading">Produse Top</p>
        </div>
        <swiper
            :breakpoints= "{
            1054:{
             slidesPerView: 5,
            },
                896:{
                slidesPerView: 4,

              },
              663:{
                slidesPerView: 3,
              }
              ,
             465:{
                slidesPerView: 2,
              }
            }"
          :autoplay="{
            delay: 500,
           nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    stopOnLastSlide: false,
    disableOnInteraction: true
          }"
          :enabled="true"
          :modules="modules"
          class="i__swiper"
        >
          <swiper-slide
          data-swiper-autoplay="2000"
            v-for="product in getItemsByBrand('Beko')"
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
              :monthlyPrice="monthlyPrice(product.price)"
              :hidden="showPrices(product.discount)"
              :oldPrice="showOnePrice(product.discount)"
              :dicountLabel="dicountLabel(product.discount)"
              :hugeSaleLabel="hugeSaleLabel(product.discount)"
              @addToCard="addProductCard(product)"
              @addToFavorite="addProductToFavorite(product)"
            />
          </swiper-slide>
               <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
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
    discountPrice:product.discountPrice,
    savedMoney: product.savedMoney,
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
    discountPrice:product.discountPrice,
    savedMoney: product.savedMoney,
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

import "swiper/scss/autoplay";

// import required modules
import {
  Autoplay,
  Navigation
} from "swiper/modules";

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

 
 
 
 
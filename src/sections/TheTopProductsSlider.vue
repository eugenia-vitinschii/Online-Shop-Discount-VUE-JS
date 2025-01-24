<template>
  <swiper
    :loop="true"
    :slidesPerView="4"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :navigation="true"
    class="mySwiper"
  >
    <swiper-slide v-for="product in getItemsByBrand('Beko')" :key="product.id">
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
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation  } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>


<style lang="scss" scoped>
.ii {
  width: 200px;
  height: 400px;
  border: 1px solid black;
}
</style>
 
 
 
 
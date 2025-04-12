<template>
  <!-- routing section -->
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
  <!-- promo section -->
  <promo-section />
  <!-- brand section -->
  <brands-section />
  <!-- promo items -->
  <div class="promo">
    <div class="container">
      <div class="promo__wrapper">
        <p class="body-text">
          Produse la reducere: {{ store.getPromoItems.length }}
        </p>
        <div class="item__container" v-if="created">
          <the-item
            v-for="product in store.getPromoItems"
            :key="product.id"
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
          <div class="spaces"></div>
          <div class="spaces"></div>
          <div class="spaces"></div>
          <div class="spaces"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//vue
import { defineOptions, ref, onMounted } from "vue";

//components
import TheRouter from "@/sections/TheRouter.vue";
import PromoSection from "@/sections/PromoSection.vue";
import BrandsSection from "@/sections/BrandsSection.vue";
import TheItem from "@/sections/TheItem.vue";

//component
defineOptions({
  name: "PromoView",
});

//component data
let created = ref(false);

//store
import { useProductStore } from "@/stores/product";

//Pinia store
const store = useProductStore();

//store actions
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
  addToFavorite(product);
}

//hooks
onMounted(() => {
  created.value = true;
  fetchProducts();
});
</script>

 <style lang="scss" scoped>



 </style>
 
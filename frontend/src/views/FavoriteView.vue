<template>
<div>
<!-- routing -->
  <div class="router">
    <div class="container">
      <div class="router__wrapper">
        <the-router :promo="false"/>
        <br />
              <div class="router__link">
         <router-link to="/brands" class="blue-router">
           / Favorite
          </router-link>
      </div>
      </div>
    </div>
  </div>
  <!-- favorite page -->
  <div class="favorite">
    <div class="container">
      <div class="favorite__wrapper">
        <p class="heading">Favorite ({{ user.favorite.length }})</p>
        <div class="item__container">
          <the-item
            v-for="product in user.favorite"
            :product="product"
            :key="product.id"
            :id="product.id"
            :brand="product.brand"
            :img="product.img"
            :productName="product.productName"
            :type="product.type"
            :price="product.price"
            :discount="product.discount"
            :discountPrice="product.discountPrice"
            :savedMoney="product.savedMoney"
            :stock="product.stock"
            :monthlyPrice="monthlyPrice(product.price)"
            :hidden="showPrices(product.discount)"
            :oldPrice="showOnePrice(product.discount)"
            :discountLabel="discountLabel(product.discount)"
            :hugeSaleLabel="hugeSaleLabel(product.discount)"
            @addToCard="addProductCard(product)"
            @addToFavorite="removeFromFavorite(product)"
            class="favorite"
          />
          <div class="spaces"></div>
          <div class="spaces"></div>
          <div class="spaces"></div>
          <div class="spaces"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- top products -->
  <the-top-products-slider />
  <!-- watched section -->
  <recently-wached-slider />
  </div>
</template>
 

<script setup lang="ts">
//components settings
defineOptions({
  name: "FavoriteView",
});


//compoents
import TheItem from "@/sections/TheItem.vue";
import TheTopProductsSlider from "@/sections/Sliders/TheTopProductsSlider.vue";
import RecentlyWachedSlider from "@/sections/Sliders/RecentlyWachedSlider.vue";
import TheRouter from "@/sections/TheRouter.vue";
// store
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

//product
import type {Product} from "../models/product";

//pinia
const store = useProductStore();
const { user } = storeToRefs(store);

const {
  addToCart,
  removeItemFromFavorite,
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

// remove product from cart
function removeFromFavorite(product: Product) {
  removeItemFromFavorite(product);
}
</script>
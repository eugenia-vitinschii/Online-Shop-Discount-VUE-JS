<template>
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
<!-- brand section -->
 <brands-section/>
  <div class="promo">
    <div class="container">
      <div class="promo__wrapper">
        <p class="body-text">Produse la reducere: {{store.getPromoItems.length}}</p>
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
import { defineOptions, ref, onMounted } from "vue"

//components
import TheRouter from "@/sections/TheRouter.vue";
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
 
const {
  fetchProducts,
  addToCart,
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

onMounted(() => {
  created.value = true;
  fetchProducts();
});
</script>

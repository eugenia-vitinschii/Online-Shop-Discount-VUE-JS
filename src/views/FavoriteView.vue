<template>
<!-- favorite page -->
  <div class="favorite">
    <div class="container">
      <div class="favorite__wrapper">
        <p class="heading">FAVORITE PAGE {{user.favorite.length}}  </p>
                  <div class="item__container" >
            <the-item
              v-for="product in  user.favorite"
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
import { defineOptions } from "vue";

//components settings
defineOptions({
  name: "FavoriteView",
});

//variables
 

//compoents
import TheItem from "@/sections/TheItem.vue";

// store
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

//pinia
const store = useProductStore();
const { user } = storeToRefs(store);
</script>
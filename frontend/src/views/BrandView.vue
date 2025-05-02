<template>
  <div>

<!-- routing -->
<div class="router">
  <div class="container">
    <div class="router__wrapper">
      <the-router/>
      <div class="router__link">
         <router-link :to="'/brands/' + brand" class="blue-router">
           /  {{brand}}
          </router-link>
      </div>
    </div>
  </div>
</div>
  <div class="trademark">
    <div class="container">
      <div class="trademark__wrapper">
        <div class="brand__title">
          <p class="heading">
            Produse {{ brand }} ( {{ getItemsByBrand(brand).length }} )
          </p>
        </div>
        <div class="trademark__items item__container ">
          <the-item
            v-for="product in getItemsByBrand(brand)"
            :key="product.id" 
            :product="product"
            :id="product.id"
            :brand="product.brand"
            :img="product.img"
            :productName="product.productName"
            :productType="product.type"
            :price="product.price"
            :discount="product.discount"
            :discountPrice="product.discountPrice"
            :savedMoney="product.savedMoney"
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
          <div class="spaces"></div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script setup lang="ts">
//vue , router
import { onMounted , watch, computed} from "vue";

import { useRoute } from "vue-router";

//components
import TheRouter from "@/sections/TheRouter.vue"
import TheItem from "@/sections/TheItem.vue";

//pinia
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

// defineOptions({
//   name: "BrandView",
// });

import type  { Product} from '@/models/product'

const store = useProductStore();

const { getItemsByBrand } = storeToRefs(store);

//get route
const route = useRoute();
const brand = computed( () => route.params.brand as string ) ;

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
function addProductCard(product: Product){
  addToCart(product);
}
//add to favorite
function addProductToFavorite(product:Product){
  addToFavorite(product);
}

//watch title (brand name)
watch(brand, (newBrand:string) => {
  if (newBrand) {
    document.title = newBrand;
  }
});

//hooks
onMounted(() => {
  document.title = brand;
  fetchProducts();
});

</script>

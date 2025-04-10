<template>
<!-- routing -->
<div class="router">
  <div class="container">
    <div class="router__wrapper">
      <the-router/>
      <div class="router__link">
         <router-link :to="'/brands/' + brand" class="header__link">
           /  {{brand}}
          </router-link>
      </div>
    </div>
  </div>
</div>
  <div class="brand">
    <div class="container">
      <div class="brand__wrapper">
        <div class="brand__title">
          <p class="heading">
            Produse {{ brand }} ( {{ getItemsByBrand(brand).length }} )
          </p>
        </div>
        <div class="brand__items  ">
          <the-item
            v-for="product in getItemsByBrand(brand)"
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
          <div class="spaces"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//vue , router
import { defineOptions, onMounted } from "vue";
import { useRoute } from "vue-router";

//components
import TheRouter from "@/sections/TheRouter.vue"
import TheItem from "@/sections/TheItem.vue";

//pinia
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

defineOptions({
  name: "BrandView",
});

const store = useProductStore();

const { getItemsByBrand } = storeToRefs(store);
const route = useRoute();
const brand = route.params.brand;

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

<style>

</style>
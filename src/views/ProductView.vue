<template>
  <!-- routing -->
  <div class="router">
    <div class="container">
      <div class="router__wrapper">
        <the-router />
        <br />
        <div class="router__link" v-if="product">
          <router-link :to="'/brand/' + product.brand" class="header__link">
            / {{ product.brand }}
          </router-link>
        </div>
        <div class="router__link">
          <p class="header__link">/{{ products.productName }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- product view -->
  <div class="product">
    <div class="container">
      <div class="product__wrapper" v-if="product">
        <!-- product component -->
        <the-product
          :id="product.id"
          :productCode="product.productCode"
          :productName="product.productName"
          :productType="product.productType"
          :img="product.img"
          :price="product.price"
          :discount="product.discount"
          :savedMoney="product.savedMoney"
          :discountPrice="product.discountPrice"
          :brand="product.brand"
          :waterConsumption="product.waterConsumption"
          :energyEfficiencyClass="product.energyEfficiencyClass"
          :type="product.type"
          :spinSpeed="product.spinSpeed"
          :loadCapacity="product.loadCapacity"
          :noiseLevelCentrifugation="product.noiseLevelCentrifugation"
          :noiseLevelWashing="product.noiseLevelWashing"
          :typeControl="product.typeControl"
          :numberOfPrograms="product.numberOfPrograms"
          :weightInPackage="product.weightInPackage"
          :depth="product.depth"
          :weight="product.weight"
          :color="product.color"
          :guarantee="product.guarantee"
          :countryOfAssembly="product.countryOfAssembly"
          :stock="product.stock"
          :disabledValue="product.stock"
          :hidden="showPrices(product.discount)"
          :onePrice="showOnePrice(product.price)"
          :monthlyPrice="monthlyPrice(product.price)"
          :dicountLabel="dicountLabel(product.discount)"
          :hugeSaleLabel="hugeSaleLabel(product.discount)"
          @addToCard="addProductCard(product)"
          @addToFavorite="addProductToFavorite(product)"
        />
      </div>
    </div>
  </div>
</template>

 

<script setup>
//components
import TheRouter from "@/sections/TheRouter.vue";
import TheProduct from "@/sections/TheProduct.vue";
//vue
import { defineOptions } from "vue";
import { onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
//store
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

defineOptions({
  name: "ProductView",
});

//pinia
const store = useProductStore();
const route = useRoute();
const id = route.params.id;

const { products } = storeToRefs(store);
const {
  getProducts,
  monthlyPrice,
  addToCart,
  dicountLabel,
  hugeSaleLabel,
  addToFavorite,
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
//variables
const product = computed(() => products.value.find((p) => p.id === id));

//watch title
watch(
  () => route.params.productName,
  (newName) => {
    document.title = `${newName}`;
  }
);

//hooks
onMounted(() => {
  (document.title = `${route.params.productName}`), getProducts(id);
});
</script>
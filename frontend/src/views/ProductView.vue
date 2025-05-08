<template>
  <div>
  <!-- routing -->
  <div class="router">
    <div class="container">
      <div class="router__wrapper">
        <the-router :promo="false"/>
        <br />
        <div class="router__link" v-if="product">
          <router-link :to="'/brands/' + product.brand" class="blue-router">
            / {{ product.brand }}
          </router-link>
        </div>
        <div class="router__link">
          <p  class="blue-router">/ {{ product.productName }}</p>
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
          :discountLabel="discountLabel(product.discount)"
          :hugeSaleLabel="hugeSaleLabel(product.discount)"
          @addToCard="addProductCard(product)"
          @addToFavorite="addProductToFavorite(product)"
        />
      </div>
    </div> 
  </div>
   <!-- watched section -->
<recently-wached-slider/>
  </div>
</template>


<script setup lang="ts">
//components
import TheRouter from "@/sections/TheRouter.vue";
import TheProduct from "@/sections/TheProduct.vue";
import RecentlyWachedSlider from "@/sections/Sliders/RecentlyWachedSlider.vue";

//vue
import { onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";

//store
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

//product
import type {Product} from "../models/product";

//component settings
defineOptions({
  name: "ProductView",
});

//pinia
const store = useProductStore();
const route = useRoute();
const id = computed(() => String(route.params.id)) ;


//pinia vriables
const { products } = storeToRefs(store);
const {
  getProducts,
  monthlyPrice,
  addToCart,
  discountLabel,
  hugeSaleLabel,
  addToFavorite,
    showPrices,
  showOnePrice,
} = store;

// add product to cart
const addProductCard = (product: Product)=> {
  addToCart(product);
}

//add to favorite
const  addProductToFavorite = (product: Product)  =>{
  addToFavorite(product);
}
//variables
const product = computed(() => products.value.find((p) => p.id === id.value));

//watch title
watch(product, (newProduct) => {
  if (newProduct) {
    document.title = newProduct.productName;
  }
});

// wached store
import { useWatchedProductsStore } from '@/stores/watchedProducts';

//w variables
const watchedStore = useWatchedProductsStore();


watch(
   product,  
  (newProduct) => {
    if (newProduct) {
      watchedStore.addWatchedProduct(newProduct);
    }
  },
  { immediate: true }  
);

//hooks
onMounted(() => {
  document.title = String(route.params.productName);
  getProducts(id.value);

});

</script>
<template>
<!-- routing -->
<div class="router">
  <div class="container">
    <div class="router__wrapper">
      <the-router/>
      <br>
      <div class="router__link">
         <router-link :to="'/brand/' + products.brand" class="header__link">
           /  {{products.brand}}
          </router-link>
      </div>
      <div class="router__link">
        <p class="header__link">/{{products.productName}}</p>
      </div>
    </div>
  </div>
</div>
<!-- product view -->
  <div class="product">
    <div class="container">
      <div class="product__wrapper">
        <!-- product component -->
        <the-product
          :id="products.id"
          :productCode="products.productCode"
          :productName="products.productName"
          :productType="products.productType"
          :img="products.img"
          :price="products.price"
          :discount="products.discount"
          :savedMoney="products.savedMoney"
          :discountPrice="products.discountPrice"
          :brand="products.brand"
          :waterConsumption="products.waterConsumption"
          :energyEfficiencyClass="products.energyEfficiencyClass"
          :type="products.type"
          :spinSpeed="products.spinSpeed"
          :loadCapacity="products.loadCapacity"
          :noiseLevelCentrifugation="products.noiseLevelCentrifugation"
          :noiseLevelWashing="products.noiseLevelWashing"
          :typeControl="products.typeControl"
          :numberOfPrograms="products.numberOfPrograms"
          :weightInPackage="products.weightInPackage"
          :depth="products.depth"
          :weight="products.weight"
          :color="products.color"
          :guarantee='products.guarantee'
          :countryOfAssembly="products.countryOfAssembly"
          :stock="products.stock"
          :disabledValue="products.stock"
          :hidden="showPrices(products)"
          :onePrice="showOnePrice(products)"
          :monthlyPrice="monthlyPrice(products.price)"
          :dicountLabel="dicountLabel(products.discount)"
          :hugeSaleLabel="hugeSaleLabel(products.discount)"
           @addToCard="addProductCard(products)"
           @addToFavorite="addProductToFavorite(products)"
        />
      </div>
    </div>
  </div>
</template>

 

<script setup>
//components
import TheRouter from "@/sections/TheRouter.vue"
import TheProduct from "@/sections/TheProduct.vue";
//vue
import { defineOptions } from "vue";
import { onMounted, watch  } from "vue";
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
const id = route.params.id

const { products } = storeToRefs(store);
const { getProducts, monthlyPrice , addToCart,dicountLabel ,hugeSaleLabel,   addToFavorite,} = store;


//functions
function showPrices(products){
    if(Number(products.discount)<  1 || Number(products.discount) > 99 ){
    return  true
  }
}
function showOnePrice(products){
    if(Number(products.discount)<  1 || Number(products.discount) > 99 ){
    return  true
  }
}
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


class addFavorite {
  constructor(id){
  this.id= id;
  }
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
    fav : new addFavorite(id)  
  });
}

//watch title 
watch(() => route.params.productName, (newName) => {
  document.title = `${newName}`
})

//hooks
onMounted(() => {
document.title = `${route.params.productName}`,
  getProducts(id);
});

</script>
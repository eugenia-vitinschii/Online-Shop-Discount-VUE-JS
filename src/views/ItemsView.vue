<template>
 <div class="item">
    <div class="container">
      <div class="item__content">
        <div class="item__wrapper">
           <div class="item__filter filters">
            <div class="filters__button">
               <button class="green__button">Filtru</button>
            </div>
          
   
      <div class="filters__wrapper"  >
        <div class="filers__brand">
          <p class="body-text bold">Sortează după producător</p>
          <p class="body-text" v-if="store.allProducts < 28">
          Au fost găsite: {{ store.allProducts }} produse
        </p>
          <div class="item__filter-content" >
            <div class="checkbox-wrapper">
              <input
                class="inp-cbx"
                id="indesit"
                type="checkbox"
                value="Indesit"
                v-model="checked"
              />
              <label class="cbx" for="indesit">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>INDESIT</span>
              </label>
            </div>
            <div class="checkbox-wrapper">
              <input
                class="inp-cbx"
                id="samsung"
                type="checkbox"
                value="Samsung"
                v-model="checked"
              />
              <label class="cbx" for="samsung">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>SAMSUNG</span>
              </label>
            </div>

            <div class="checkbox-wrapper">
              <input
                class="inp-cbx"
                id="whirlpool"
                type="checkbox"
                value="Whirlpool"
                v-model="checked"
              />
              <label class="cbx" for="whirlpool">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>WHIRLPOOL</span>
              </label>
            </div>
            <div class="checkbox-wrapper">
              <input
                class="inp-cbx"
                id="electrolux"
                type="checkbox"
                value="Electrolux"
                v-model="checked"
              />
              <label class="cbx" for="electrolux">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>ELECTROLUX</span>
              </label>
            </div>
            <div class="checkbox-wrapper">
              <input
                class="inp-cbx"
                id="beko"
                type="checkbox"
                value="Beko"
                v-model="checked"
              />
              <label class="cbx" for="beko">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>BEKO</span>
              </label>
            </div>
            <div class="checkbox-wrapper">
              <input
                class="inp-cbx"
                id="aeg"
                type="checkbox"
                value="AEG"
                v-model="checked"
              />
              <label class="cbx" for="aeg">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>AEG</span>
              </label>
            </div>
            <div class="checkbox-wrapper">
              <input
                class="inp-cbx"
                id="candy"
                type="checkbox"
                value="Candy"
                v-model="checked"
              />
              <label class="cbx" for="candy">
                <span>
                  <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </svg>
                </span>
                <span>CANDY</span>
              </label>
            </div>
          </div>
        </div>
      
    
  </div>
        </div>
        <div class="item__container">
          <the-item
            v-for="product in store.checkboxFilters"
            :key="product.id"
            :id="product.id"
            :brand="product.brand"
            :img="product.img"
            :productName="product.productName"
            :productType="product.productType"
            :price="product.price"
            :discount="product.discount"
            :label="product.label"
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
  </div>
</template>

<script setup>
//vue
import { defineOptions, watch } from "vue";
import { onMounted  } from "vue";

//store
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/product";
//components
import TheItem from "@/sections/TheItem.vue";

defineOptions({
  name: "ItemsView",
});

//Pinia store

const store = useProductStore();
const { checked } = storeToRefs(store);

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

watch( store.checkboxFilters, () =>{
console.log('smtg changes')
})

//hooks
onMounted(() => {
  fetchProducts();
});
</script>

<style lang="scss">
 
</style>
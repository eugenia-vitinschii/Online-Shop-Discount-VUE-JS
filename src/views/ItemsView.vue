<template>
<div class="router">
  <div class="container">
    <div class="router__wrapper">
      <the-router/>
    </div>
    
  </div>
</div>
  <div class="brands">
    <div class="container">
      <div class="brands__wrapper">
        <brands-section
          v-for="item in brands"
          :key="item.id"
          :img="item.img"
          :brand="item.brand"
        />
      </div>
    </div>
  </div>
  <div class="item">
    <div class="container">
      <div class="item__content">
        <div class="item__wrapper">
          <div class="item__filter filters">
            <div class="filters__button">
              <button class="button-svg" @click="showFilters = !showFilters">
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z"/></svg>
              </button>
              <div class="filters__button--prices">
                <button class="button-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M480-360 280-560h400L480-360Z" />
                  </svg>
                </button>
                <button class="button-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="m280-400 200-200 200 200H280Z" />
                  </svg>
                </button>
              </div>
              <button class="button-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z"/></svg>
              </button>
              <button class="button-svg">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
              </button>
            </div>

            <div v-if="showFilters" class="filters__wrapper">
              <div class="filters__brand">
                <p class="body-text bold">Sortează după producător</p>
                <p class="body-text" v-if="store.allProducts < 28">
                  Au fost găsite: {{ store.allProducts }} produse
                </p>
                <div class="item__filter-content">
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

              <button class="button-svg" @click="showFilters = !showFilters">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path
                    d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="item__container" v-if="created">
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
import { defineOptions, watch, ref } from "vue";
import { onMounted } from "vue";

//store
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/product";
//components
import TheRouter from "@/sections/TheRouter.vue"
import TheItem from "@/sections/TheItem.vue";
import BrandsSection from "@/sections/BrandsSection.vue";
defineOptions({
  name: "ItemsView",
});

//filters section
const showFilters = ref(false);

let created = ref(false);

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

const brands = [
  {
    id: 1,
    img: require("@/assets/img/brands/aeg.png"),
    brand: "AEG",
  },
  {
    id: 2,
    img: require("@/assets/img/brands/beko.jpg"),
    brand: "Beko",
  },
  {
    id: 3,
    img: require("@/assets/img/brands/candy.jpg"),
    brand: "Candy",
  },
  {
    id: 4,
    img: require("@/assets/img/brands/electrolux.png"),
    brand: "Electrolux",
  },
  {
    id: 5,
    img: require("@/assets/img/brands/indesit.png"),
    brand: "Indesit",
  },
  {
    id: 6,
    img: require("@/assets/img/brands/samsung.jpg"),
    brand: "Samsung",
  },
  {
    id: 7,
    img: require("@/assets/img/brands/whirlpool.png"),
    brand: "Whirlpool",
  },
];
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

watch(store.checkboxFilters, () => {
  console.log("smtg changes");
});

//hooks
onMounted(() => {
  created.value = true;
  fetchProducts();
});
</script>

<style lang="scss">
</style>